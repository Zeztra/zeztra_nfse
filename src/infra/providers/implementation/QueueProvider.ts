import { Consumer } from 'sqs-consumer';

import {
  IQueueProvider,
  Queues,
  TQueueProviderBatch,
} from '@application/providers/IQueueProvider';
import {
  DeleteMessageCommand,
  ReceiveMessageCommand,
  SQSClient,
  SendMessageCommand,
  SendMessageBatchCommand,
} from '@aws-sdk/client-sqs';

import { configAWS } from '../utils/AWSConnection';

class QueueProvider implements IQueueProvider {
  private sqs: SQSClient;

  constructor() {
    this.sqs = new SQSClient({ ...configAWS('sqs') });
  }

  private queues = {
    communication: {
      url: process.env.SQS_URL_COMMUNICATION,
      delaySeconds: 0,
      batchSize: 2,
    },
  };

  async sendMessage(queueName: Queues, data: any): Promise<any> {
    try {
      const queueUrl = this.queues[queueName]?.url;
      if (this.sqs && queueUrl !== 'not_defined') {
        const input = {
          MessageBody: JSON.stringify(data),
          QueueUrl: queueUrl,
          DelaySeconds: this.queues[queueName]?.delaySeconds,
        };

        const command = new SendMessageCommand(input);
        await this.sqs.send(command);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async sendMessagesInBatch(
    queueName: Queues,
    messages: TQueueProviderBatch,
  ): Promise<any> {
    try {
      const queueUrl = this.queues[queueName]?.url;

      if (this.sqs && queueUrl !== 'not_defined') {
        const entries = messages.data.map((data) => ({
          Id: data.messageId,
          MessageBody: JSON.stringify({
            fn: messages.fn,
            data: { ...data.body },
          }),
          DelaySeconds: this.queues[queueName]?.delaySeconds,
        }));

        const input = {
          QueueUrl: queueUrl,
          Entries: entries,
        };

        const command = new SendMessageBatchCommand(input);
        await this.sqs.send(command);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async receiveMessage(queueName: Queues, fn: any): Promise<void> {
    try {
      if (this.sqs) {
        const input = {
          QueueUrl: this.queues[queueName]?.url,
        };
        const command = new ReceiveMessageCommand(input);
        const result = await this.sqs.send(command);

        if (!result?.Messages || !result.Messages[0]) {
          return;
        }

        const message = result.Messages[0];

        if (!message.Body) {
          return;
        }

        fn(JSON.parse(message.Body));

        const deleteParams = {
          QueueUrl: this.queues[queueName]?.url,
          ReceiptHandle: result.Messages[0].ReceiptHandle,
        };

        const commandDelete = new DeleteMessageCommand(deleteParams);
        await this.sqs.send(commandDelete);
      }
    } catch (err) {
      console.log(err);
    }
  }

  initiateConsumers(queueName: Queues, fn: any): void {
    if (
      this.sqs !== null &&
      process.env.AWS_SQS_QUEUE_ENABLED === 'true' &&
      this.queues[queueName]?.url !== 'not_defined'
    ) {
      const queueUrl = this.queues[queueName]?.url;
      if (!queueUrl) {
        return;
      }

      const app = Consumer.create({
        batchSize: this.queues[queueName]?.batchSize,
        queueUrl,
        sqs: new SQSClient({
          ...configAWS('sqs'),
        }),
        handleMessage: async (message) => {
          try {
            if (!message.Body) {
              return;
            }
            // Função da fila
            await fn(JSON.parse(message.Body));
          } catch (err) {
            console.error('Error processing message:', err);
            throw err; // Rejeita a mensagem para que ela não seja apagada
          }
        },
      });

      app.on('error', (err) => {
        console.error('ERROR SQS:', err.message);
      });

      app.on('processing_error', (err) => {
        console.error('ERROR SQS:', err.message);
      });

      app.start();
    }
  }
}

export const queueProvider = new QueueProvider();

export enum Queues {
  communication = 'communication',
}

export type TQueueProvider = {
  messageId: string;
  body: any;
};

export type TQueueProviderBatch = { fn: string; data: Array<TQueueProvider> };

export interface IQueueProvider {
  sendMessage(queueName: Queues, data: any): Promise<any>;
  sendMessagesInBatch(
    queueName: Queues,
    messages: TQueueProviderBatch,
  ): Promise<any>;
  receiveMessage(queueName: Queues, fn: any): Promise<any>;
  initiateConsumers(queueName: Queues, fn: any): any;
}

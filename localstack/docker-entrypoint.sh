#!/bin/bash

# Create Queues
aws --endpoint-url=http://localhost:4566 sqs create-queue --queue-name execute_billing

# Create bucket S3
aws --endpoint-url=http://127.0.0.1:4566 s3api create-bucket --bucket zeztra_nfse

echo 'Localstack configurado.'
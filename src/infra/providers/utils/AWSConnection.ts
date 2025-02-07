export const configAWS = (resource: 's3' | 'sqs'): any => {
  return {
    endpoint: process.env.AWS_END_POINT.replace('RESOURCE', resource),
    region: process.env.AWS_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SECRET_KEY,
    },
  };
};

export enum LogOrigin {
  'API' = 'API',
}

export enum LogAction {
  'CREATE' = 'CREATE',
  'UPDATE' = 'UPDATE',
  'CANCEL' = 'CANCEL',
}

export enum LogStepDescription {
  'REQUEST' = 'REQUEST',
  'RESPONSE_SUCCESS' = 'RESPONSE_SUCCESS',
  'RESPONSE_ERROR' = 'RESPONSE_ERROR',
  'AXIOS_REQUEST' = 'AXIOS_REQUEST',
  'AXIOS_RESPONSE_SUCCESS' = 'AXIOS_RESPONSE_SUCCESS',
  'AXIOS_RESPONSE_ERROR' = 'AXIOS_RESPONSE_ERROR',
}

export enum LogType {
  'COMPANY' = 'COMPANY',
  'CREDENTIAL' = 'CREDENTIAL',
  'SERVICE' = 'SERVICE',
  'PAYER' = 'PAYER',
  'NFSE' = 'NFSE',
}

export type TLogTracker = {
  origin: LogOrigin;
  trackerId: string;
};

export default class Log {
  public readonly _id: any;

  public trackerId: string;

  public url?: string;

  public origin: LogOrigin;

  public stepDescription: LogStepDescription;

  public data: any;

  public action?: LogAction;

  public logType: LogType;

  public actionTime: number;

  public createdAt?: Date;

  public updatedAt?: Date;

  constructor(props: Omit<Log, '_id'>) {
    Object.assign(this, props);
  }
}

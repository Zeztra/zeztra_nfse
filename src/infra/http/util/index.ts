import { Request, Response } from 'express';

import { LogAction, LogType } from '@domain/entities/Log';

export type ResponseControllerHTTP = {
  statusCode: number;
  payload: any;
  success: boolean;
};

const runAsyncWrapper = (callback: any) => {
  return (req: Request, res: Response, next: any): any => {
    callback(req, res, next).catch(next);
  };
};

const resJson = (
  response: Response,
  responseController: ResponseControllerHTTP,
  saveLog?: {
    action: LogAction;
    type: LogType;
    saveLogResponse: (
      action: LogAction,
      logType: LogType,
      req: any,
      responseHTTP: ResponseControllerHTTP,
    ) => void;
  },
): any => {
  if (saveLog) {
    saveLog.saveLogResponse(
      saveLog.action,
      saveLog.type,
      response.req,
      responseController,
    );
  }
  return response.status(responseController.statusCode).jsonp({
    success: responseController.success,
    payload: responseController.payload,
  });
};

export { runAsyncWrapper, resJson };

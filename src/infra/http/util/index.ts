import { Request, Response } from 'express';

import { LogAction, LogType } from '@domain/entities/log';

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

  const { success, payload, statusCode } = responseController;

  return response.status(statusCode).jsonp({
    success,
    payload,
  });
};

const resPdf = (
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

  const { success, payload, statusCode } = responseController;

  if (payload.error) {
    return response.status(statusCode).jsonp({
      success,
      payload: payload.error,
    });
  }

  return response
    .status(statusCode)
    .setHeader('Content-Type', 'application/pdf')
    .send(payload);
};

const resXml = (
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

  const { success, payload, statusCode } = responseController;

  if (payload.error) {
    return response.status(statusCode).jsonp({
      success,
      payload: payload.error,
    });
  }

  return response
    .status(statusCode)
    .setHeader('Content-Type', 'application/xml')
    .send(payload);
};

export { runAsyncWrapper, resJson, resPdf, resXml };

import { HttpStatusCode } from 'axios';

export type ResponseController = {
  statusCode: number;
  payload: any;
  success: boolean;
};

export function ok<T>(dto?: T): ResponseController {
  return {
    statusCode: HttpStatusCode.Ok,
    payload: dto,
    success: true,
  };
}

export function created(): ResponseController {
  return {
    statusCode: HttpStatusCode.Created,
    payload: undefined,
    success: true,
  };
}

export function accepted(): ResponseController {
  return {
    statusCode: HttpStatusCode.Accepted,
    payload: undefined,
    success: true,
  };
}

export function badRequest(error: string): ResponseController {
  return {
    statusCode: HttpStatusCode.BadRequest,
    payload: { error },
    success: false,
  };
}

export function unprocessableEntity(error: string): ResponseController {
  return {
    statusCode: HttpStatusCode.UnprocessableEntity,
    payload: { error },
    success: false,
  };
}

export function unauthorized(error: string): ResponseController {
  return {
    statusCode: HttpStatusCode.Unauthorized,
    payload: { error },
    success: false,
  };
}

export function forbidden(error: string): ResponseController {
  return {
    statusCode: HttpStatusCode.Forbidden,
    payload: { error },
    success: false,
  };
}

export function notFound(error: string): ResponseController {
  return {
    statusCode: HttpStatusCode.NotFound,
    payload: { error },
    success: false,
  };
}

export function conflict(error: string): ResponseController {
  return {
    statusCode: HttpStatusCode.Conflict,
    payload: { error },
    success: false,
  };
}

export function tooMany(error: string): ResponseController {
  return {
    statusCode: HttpStatusCode.TooManyRequests,
    payload: { error },
    success: false,
  };
}

export function fail(error: string): ResponseController {
  console.log(error);

  return {
    statusCode: HttpStatusCode.InternalServerError,
    payload: { error },
    success: false,
  };
}

import { NextFunction, Request, Response } from 'express';
import { DefinedHttpError } from 'restify-errors';

export default (error: DefinedHttpError, _req: Request, res: Response, _next: NextFunction) => {
  console.log(error);

  if (error.statusCode) {
    return res.status(error.statusCode).json({ message: error.message });
  }

  return res.status(500).send({ message: error.message });
};

import { NextFunction, Request, Response } from 'express';
import IError from '../interfaces/IError';

export default (error: IError, _req: Request, res: Response, _next: NextFunction) => {
  console.log('erro', error);
  return res.status(500).send({ message: error.message });
};

import { NextFunction, Request, Response } from 'express';
import * as errors from 'restify-errors';

const LoginValidation = (req: Request, _res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  if (!password || typeof password !== 'string') {
    throw new errors.BadRequestError('All fields must be filled');
  }

  if (!email || typeof email !== 'string') {
    throw new errors.BadRequestError('All fields must be filled');
  }

  next();
};

export default LoginValidation;

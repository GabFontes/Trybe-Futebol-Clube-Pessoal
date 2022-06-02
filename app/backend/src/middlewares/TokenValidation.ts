import { NextFunction, Request, Response } from 'express';
import * as errors from 'restify-errors';
import { jwtVerify } from '../helpers/jwtToken';

const TokenValidation = (req: Request, _res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) throw new errors.UnauthorizedError('Invalid Token');

  const validate = jwtVerify(authorization);

  if (!validate) throw new errors.UnauthorizedError('Invalid Token');
  next();
};

export default TokenValidation;

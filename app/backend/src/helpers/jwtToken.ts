import * as jwt from 'jsonwebtoken';
import * as fs from 'fs';
import IUserPayload from '../interfaces/IUserPayload';

const SECRET = fs.readFileSync('jwt.evaluation.key', 'utf-8');

const jwtConfig: jwt.SignOptions = {
  algorithm: 'HS256',
  expiresIn: '7d',
};

export const jwtSign = (payload: IUserPayload): string => jwt.sign(payload, SECRET, jwtConfig);

export const jwtVerify = (token: string) => jwt.verify(token, SECRET) as IUserPayload;

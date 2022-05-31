import * as Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

const loginValidation = Joi.object({
  // https://stackoverflow.com/questions/57972358/joi-email-validation
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required()
    .messages({
      'email.required': '"email" is required',
    }),
  password: Joi.string().min(6).required()
    .messages({
      'password.required': '"password" is required ',
      'string.min': '"password" length must be 6 characters long',
    }),
});

export default (req: Request, res: Response, next: NextFunction) => {
  const { error } = loginValidation.validate(req.body);
  if (error) return res.status(400).json({ message: error.message });
  next();
};

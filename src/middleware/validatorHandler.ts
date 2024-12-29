import { Request, Response, NextFunction } from 'express'
import { body, validationResult } from 'express-validator'
import RequestValidatorError from '../error/validator'
import mongoose from 'mongoose'


export const ticketValidator = [
  body('title').notEmpty().withMessage('Title must be min 3 characters length'),
  body('price').notEmpty().isFloat({ min: 0 }).withMessage('Price must be positive value'),
]

export const userValidator = [
  body('email').isEmail().withMessage('Email must be valid'),
  body('password').trim().isLength({ min: 4, max: 20 }).withMessage('Password must be between 4 and 20 characters'),
]

export const orderValidator = [
  body('ticketId')
    .notEmpty()
    .custom((input: string) => mongoose.Types.ObjectId.isValid(input))
    .withMessage('TicketId must be provided'),
]

export default function validatorHandler(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    throw new RequestValidatorError(errors.array())
  }

  next()
}

import { Request, Response, NextFunction } from 'express'
import { body, validationResult } from 'express-validator'
import RequestValidatorError from '../error/validator'

export const ticketValidator = [
  body('title').notEmpty().withMessage('Title must be min 3 characters length'),
  body('price').notEmpty().isFloat({ min: 0 }).withMessage('Price must be positive value'),
]

export default function ticketHandler(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    throw new RequestValidatorError(errors.array())
  }

  next()
}
import BadRequestError from './error/badRequest'
import CustomError from './error/custom'
import DatabaseError from './error/database'
import NotAuthorizedError from './error/notAuthError'
import NotFoundError from './error/notFound'
import RequestValidatorError from './error/validator'

import authHandler from './middleware/authHandler'
import currentUserHandler from './middleware/currentUserHandler'
import errorHandler from './middleware/errHandler'
import userValidatorHandler, { userValidator } from './middleware/userHandler' 

export {
  BadRequestError,
  CustomError,
  DatabaseError,
  NotAuthorizedError,
  NotFoundError,
  RequestValidatorError,
  authHandler,
  currentUserHandler,
  errorHandler,
  userValidatorHandler,
  userValidator
}
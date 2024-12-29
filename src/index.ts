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
import ticketValidatorHandler, { ticketValidator } from './middleware/ticketHandler'  
import BaseListener from './nats/listener'
import BasePublisher from './nats/publisher'
import { channels } from './nats/enum'
import { TicketCreatedEvent, TicketUpdatedEvent } from './nats/events'

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
  userValidator,
  ticketValidator,
  ticketValidatorHandler,
  BaseListener,
  BasePublisher,
  TicketCreatedEvent,
  TicketUpdatedEvent,
  channels
}
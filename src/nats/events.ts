import { channels } from './enum'

interface TicketData {
  id: string
  title: string
  price: number
  userId: string
}

export interface TicketCreatedEvent {
  channelName: channels.TicketCreated
  data: TicketData
}

export interface TicketUpdatedEvent {
  channelName: channels.TicketUpdated
  data: TicketData
}
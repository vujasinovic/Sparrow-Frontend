import {Ticket} from '../models-airline/ticket';
import {Flight} from '../models-airline/flight';

export class TicketDto {
  constructor(
    public ticket: Ticket = null,
    public flight: Flight = null
  ) {

  }
}

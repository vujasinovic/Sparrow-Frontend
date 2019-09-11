import {Component} from '@angular/core';
import {Ticket} from '../models-airline/ticket';
import {TicketService} from './ticket.service';
import {TicketDto} from '../dto/ticketDto';

@Component({
  templateUrl: 'tickets.component.html',
  selector: 'app-tickets'
})
export class TicketsComponent {

  tickets: TicketDto[] = [];

  constructor(private ticketService: TicketService) {
    ticketService.getTickets().subscribe(v => this.tickets = v);
  }

}

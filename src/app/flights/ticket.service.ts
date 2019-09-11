import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Globals} from '../globals';
import {Observable} from 'rxjs';
import {Ticket} from '../models-airline/ticket';
import {TicketDto} from '../dto/ticketDto';

@Injectable({providedIn: 'root'})
export class TicketService {

  readonly apiUrl;

  constructor(private httpClient: HttpClient, private globals: Globals) {
    this.apiUrl = globals.apiRoot + 'api/airline/ticket/';
  }

  createTicket(ticket): Observable<Ticket> {
    return this.httpClient.post<Ticket>(this.apiUrl, ticket);
  }

  createInvite(tid, username): Observable<any> {
    return this.httpClient.post(this.apiUrl + 'invite/' + tid + '/' + username, {});
  }

  getTickets(): Observable<TicketDto[]> {
    return this.httpClient.get<TicketDto[]>(this.apiUrl);
  }

}

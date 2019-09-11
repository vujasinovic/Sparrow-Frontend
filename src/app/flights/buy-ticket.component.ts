import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Flight} from '../models-airline/flight';
import {AirlineService} from '../airline/airline.service';
import {Seat} from '../models-airline/seat';
import {FriendsService} from '../friends/friends.service';
import {User} from '../user';
import {TicketService} from './ticket.service';
import {Ticket} from '../models-airline/ticket';
import {tick} from '@angular/core/testing';
import {AuthService} from '../login/auth.service';

@Component({
  selector: 'app-buy-ticket',
  templateUrl: 'buy-ticket.component.html'
})
export class BuyTicketComponent {
  flight: Flight;
  seatSelection: Seat[] = [];
  selectedSeats: Seat[];
  friends: User[] = [];

  constructor(activatedRoute: ActivatedRoute, private airlineService: AirlineService, private friendsService: FriendsService,
              private ticketService: TicketService, private authService: AuthService) {
    const fid = Number(activatedRoute.snapshot.paramMap.get('id'));
    airlineService.getFlight(fid).subscribe(f => this.flight = f);
    friendsService.getFriends().subscribe(fs => this.friends = fs);
  }

  range(n) {
    const arr = [];

    for (let i = 0; i < n; i++) {
      arr.push(i);
    }

    return arr;
  }


  getSelectedSeats(): Seat[] {
    const sel: Seat[] = [];
    for (const id in this.seatSelection) {
      if (this.seatSelection[id]) {
        const s = new Seat();
        s.id = Number(id);
        sel.push(s);
      }
    }

    this.selectedSeats = sel;

    if (this.selectedSeats.length > 0) {
      this.selectedSeats[0].firstName = this.authService.getLoggedUser().firstName;
      this.selectedSeats[0].lastName = this.authService.getLoggedUser().lastName;
    }

    return sel;
  }


  friendSelected(seat: Seat) {
    if (!seat.friend) {
      return;
    }
    console.log(seat.friend);
    seat.firstName = seat.friend.firstName;
    seat.lastName = seat.friend.lastName;

    console.log(seat.firstName);
    console.log(seat.lastName);
  }

  buy() {
    this.getSelectedSeats();

    this.selectedSeats.forEach(seat => {
      const ticket = new Ticket();
      ticket.firstName = seat.firstName;
      ticket.firstName = seat.firstName;
      ticket.flight = this.flight;
      ticket.seat = seat;
      this.ticketService.createTicket(ticket).subscribe(nt => {
        if (seat.friend) {
          this.ticketService.createInvite(nt.id, seat.friend.username).subscribe();
        }
      });
    });
  }
}

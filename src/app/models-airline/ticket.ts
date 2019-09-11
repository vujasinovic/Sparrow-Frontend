import {User} from '../user';
import {Seat} from './seat';
import {Flight} from './flight';

export class Ticket {
  constructor(
    public id: number = null,
    public user: User = null,
    public firstName: string = null,
    public lastName: string = null,
    public seat: Seat = null,
    public flight: Flight = null
  ) {

  }
}

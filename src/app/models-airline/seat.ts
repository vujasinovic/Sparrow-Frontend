import {User} from '../user';
import {Airline} from './airline';
import {Segment} from './segment';

export class Seat {
  constructor(
    public id: number = null,
    public available: boolean = true,
    public quickReservation: boolean = false,
    public friend: User = null,
    public firstName: string = null,
    public lastName: string = null,
    public segment: Segment = null
  ) {

  }
}

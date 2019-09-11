import {Address} from '../models-hotel/address';
import {User} from '../user';
import {Destination} from './destination';
import {Flight} from './flight';

export class Airline {
  constructor(
    public id: number = null,
    public name: string = null,
    public address: Address = new Address(),
    public description: string = null,
    public admin: User = null,
    public destinations: Destination[] = [],
    public flights: Flight[] = []
  ) {
  }
}

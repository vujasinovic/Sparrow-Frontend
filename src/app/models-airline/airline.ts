import {Address} from '../models-hotel/address';
import {User} from '../user';

export class Airline {
  constructor(
    public id: number = null,
    public name: string = null,
    public address: Address = new Address(),
    public description: string = null,
    public admin: User = null
  ) {
  }
}

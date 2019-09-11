import {Address} from "../models-hotel/address";
import {Room} from "../models-hotel/room";
import {User} from "../user";
import {Dealership} from "./dealership";
import {Car} from "./car";


export class Rentacar{

  id: number;
  name: string;
  address: Address;
  description: string;
  cars : Car[];
  dealerships : Dealership[];
  admin: User;
  city: string;
  cheapest: number;
}

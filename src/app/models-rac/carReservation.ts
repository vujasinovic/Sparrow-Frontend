import {User} from "../user";
import {HotelServices} from "../models-hotel/hotel-services";
import {Car} from "./car";
import {Dealership} from "./dealership";

export class CarReservationModel {
  id: number;
  user: User;
  cars: Car[];
  start: Date;
  end: Date;
  price: number;
}

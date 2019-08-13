import {User} from "../user";
import {Room} from "./room";
import {HotelServices} from "./hotel-services";

export class HotelReservation {
  id: number;
  user: User;
  rooms: Room[];
  start: Date;
  end: Date;
  hotelServices: HotelServices[];
  price: number;
}

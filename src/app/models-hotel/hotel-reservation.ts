import {User} from "../user";
import {Room} from "./room";

export class HotelReservation {
  id: number;
  user: User;
  room: Room;
  start: Date;
  end: Date;
}

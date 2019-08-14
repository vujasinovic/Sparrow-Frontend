import {Room} from "../models-hotel/room";

export class HotelReservationDto {
  hotelName: string;
  rooms: Room[];
  start: Date;
  end: Date;
  price: number;
}

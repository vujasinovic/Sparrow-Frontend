import {Room} from "../models-hotel/room";

export class HotelReservationDto {
  id: number;
  hotelName: string;
  hotelId: number;
  rooms: Room[];
  start: Date;
  end: Date;
  price: number;
}

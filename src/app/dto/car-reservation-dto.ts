import {Car} from "../models-rac/car";

export class CarReservationDto {
  id: number;
  rentacar : string;
  cars: Car[];
  start: Date;
  end: Date;
  price: number;
}

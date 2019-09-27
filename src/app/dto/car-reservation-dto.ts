import {Car} from "../models-rac/car";

export class CarReservationDto {
  id: number;
  cars: Car[];
  start: Date;
  end: Date;
  price: number;
  rentacarId: number;
}

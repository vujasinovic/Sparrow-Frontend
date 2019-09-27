import {User} from "../user";
import {Car} from "./car";


export class CarReservationModel {
  id: number;
  user: User;
  cars: Car[];
  start: Date;
  end: Date;
  price: number;
  rentaCarId : number;
}

import {User} from "../user";
import {Car} from "./car";

export class CarSale{
  id: number;
  car: Car;
  start: Date;
  end: Date;
  price: number;
}

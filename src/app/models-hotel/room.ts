import {Hotel} from "./hotel";

export class Room {
  id: number;
  name: string;
  bedsNo: number;
  hotel: Hotel;
  floor: number;
  balcony: boolean;
}

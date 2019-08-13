import {Address} from "./address";
import {PriceList} from "./pricelist";
import {Room} from "./room";
import {User} from "../user";
import {HotelServices} from "./hotel-services";

export class Hotel {
  id: number;
  name: string;
  address: Address;
  description: string;
  priceLists: PriceList[];
  rooms: Room[];
  admin: User;
  hotelServices: HotelServices[];
  image: string;
  minRoomPrice: number;
}

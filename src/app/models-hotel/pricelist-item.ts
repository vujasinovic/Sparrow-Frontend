import {Room} from "./room";
import {PriceList} from "./pricelist";

export class PriceListItem {
  id: number;
  room: Room;
  price: number;
  pricelist: PriceList;
}

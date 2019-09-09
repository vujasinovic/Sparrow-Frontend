import {PriceListItem} from "./pricelist-item";
import {HotelServices} from "./hotel-services";

export class HotelRoomDiscount {
  priceListItem: PriceListItem;
  validFrom: Date;
  validTo: Date;
  discount: number;
  hotelServices: HotelServices[];
}

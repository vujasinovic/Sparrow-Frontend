import {PriceListItem} from "./pricelist-item";

export class HotelRoomDiscount {
  priceListItem: PriceListItem;
  validFrom: Date;
  validTo: Date;
  discount: number;
}

import {Component, Input, OnInit} from "@angular/core";
import {HotelProfileService} from "../hotel-profile/hotel-profile.service";
import {HotelServices} from "../models-hotel/hotel-services";
import {ActivatedRoute} from "@angular/router";
import {PriceListItem} from "../models-hotel/pricelist-item";

@Component({
  selector: 'hotel-reservation',
  templateUrl: './hotel-reservation.component.html'
})
export class HotelReservationComponent implements OnInit {
  hotelServices: HotelServices[];
  url: string;
  checkedHotelServices: HotelServices[];
  additionalServicesPrice: number = 0;
  roomsPrice: number = 0;
  totalPrice: number = 0;

  @Input() priceListItems: PriceListItem[];

  ngOnInit(): void {
    this.findHotelServices();
    this.checkedHotelServices = [];
    for (let i = 0; i < this.priceListItems.length; i++) {
      this.roomsPrice += this.priceListItems[i].price;
      this.totalPrice = this.roomsPrice;
    }
  }

  constructor(private hotelProfileService: HotelProfileService, private activatedRoute: ActivatedRoute) {
    this.url = this.activatedRoute.snapshot.paramMap.get("id");
  }

  public findHotelServices() {
    this.hotelProfileService.findHotelServices(+this.url).subscribe(data => {
      this.hotelServices = data;
      console.log('Hotel services: ');
      console.log(this.hotelServices);
    })
  }


  toggleExtraServices(e, hs: HotelServices) {
    if (e.target.checked) {
      this.checkedHotelServices.push(hs);
      this.additionalServicesPrice += hs.price;
      this.totalPrice += hs.price;
    }
    else {
      const index: number = this.checkedHotelServices.indexOf(hs);
      if (index !== -1) {
        this.checkedHotelServices.splice(index, 1);
        this.additionalServicesPrice -= hs.price;
        this.totalPrice -= hs.price;
      }
    }
    console.log('Checked hotel services: ', this.checkedHotelServices);
  }
}

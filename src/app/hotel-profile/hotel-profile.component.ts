import {Component, OnInit} from "@angular/core";
import {Hotel} from "../models-hotel/hotel";
import {HotelProfileService} from "./hotel-profile.service";
import {ActivatedRoute} from "@angular/router";
import {PriceListItem} from "../models-hotel/pricelist-item";
import {HotelServices} from "../models-hotel/hotel-services";
import {Address} from "../models-hotel/address";

@Component({
  selector: 'hotel-profile',
  templateUrl: './hotel-profile.component.html'
})
export class HotelProfileComponent implements OnInit {
  hotel: Hotel = new Hotel();
  priceListItems: PriceListItem[];
  hotelServices: HotelServices[];
  freeRooms: number;
  freeBeds: number;

  url: string;

  constructor (private hotelProfileService: HotelProfileService, private activatedRoute: ActivatedRoute) {
    this.hotel.address = new Address();
    this.url = this.activatedRoute.snapshot.paramMap.get("id");
    this.freeBeds = 0;
    this.freeRooms = 0;
  }

  ngOnInit(): void {
    this.hotelProfileService.findOne(+this.url).subscribe(data => {
      this.hotel = data;

      this.freeRooms = this.hotel.rooms.length;
      console.log('Hotels');
      console.log(this.hotel);

      for (let i = 0; i < this.hotel.rooms.length; i++) {
        console.log(this.hotel.rooms[i]);
        this.freeBeds += this.hotel.rooms[i].bedsNo;
      }

    });
    this.findPriceList();
    this.findHotelServices();
  }
  public findPriceList() {
    this.hotelProfileService.findPriceList(+this.url).subscribe(data => {
      this.priceListItems = data;
      console.log('PriceListItems');
      console.log(this.priceListItems);
    })
  }

  public findHotelServices() {
    this.hotelProfileService.findExtraServices(+this.url).subscribe(data => {
      this.hotelServices = data;
      console.log('Hotel services: ');
      console.log(this.hotelServices);
    })
  }
}

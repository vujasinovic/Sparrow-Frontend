import {Component, OnInit} from "@angular/core";
import {Hotel} from "../models-hotel/hotel";
import {HotelProfileService} from "./hotel-profile.service";
import {ActivatedRoute} from "@angular/router";
import {PriceListItem} from "../models-hotel/pricelist-item";
import {PriceList} from "../models-hotel/pricelist";

@Component({
  selector: 'hotel-profile',
  templateUrl: './hotel-profile.component.html'
})
export class HotelProfileComponent implements OnInit {
  hotel: Hotel = new Hotel();
  priceListItems: PriceListItem[];

  url: string;

  constructor (private hotelProfileService: HotelProfileService, private activatedRoute: ActivatedRoute) {
    this.url = this.activatedRoute.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    this.hotelProfileService.findOne(+this.url).subscribe(data => {
      this.hotel = data;
      console.log('Hotels');
      console.log(this.hotel);
    });
    this.findPriceList();
  }
  public findPriceList() {
    this.hotelProfileService.findPriceList(+this.url).subscribe(data => {
      this.priceListItems = data;
      console.log('PriceListItems');
      console.log(this.priceListItems);
    })
  }
}

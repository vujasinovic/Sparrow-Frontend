import {Component, OnInit} from "@angular/core";
import {Hotel} from "../models-hotel/hotel";
import {HotelProfileService} from "./hotel-profile.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'hotel-profile',
  templateUrl: './hotel-profile.component.html'
})
export class HotelProfileComponent implements OnInit {
  hotel: Hotel;

  url: string;

  constructor (private hotelProfileService: HotelProfileService, private activatedRoute: ActivatedRoute) {
    this.url = this.activatedRoute.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    this.hotelProfileService.findOne(+this.url).subscribe(data => {
      this.hotel = data;
      console.log(this.hotel);
    })
  }
}

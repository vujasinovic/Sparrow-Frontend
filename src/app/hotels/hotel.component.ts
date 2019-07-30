import {Component, OnInit} from "@angular/core";
import {Hotel} from "../models-hotel/hotel";
import {HotelService} from "./hotel.service";

@Component({
  selector: 'hotels',
  templateUrl: './hotel.component.html'
})
export class HotelComponent implements OnInit {
  hotels: Hotel[];

  constructor (private hotelService: HotelService) {

  }

  ngOnInit(): void {
    this.hotelService.findAll().subscribe(data => {
      this.hotels = data;
      console.log('Retrieved hotels: ', this.hotels);
    })
  }

}

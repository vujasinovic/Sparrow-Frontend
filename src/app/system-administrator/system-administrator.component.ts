import {Component, OnInit} from "@angular/core";
import {Hotel} from "../models-hotel/hotel";
import {HotelService} from "../hotels/hotel.service";
import {Address} from "../models-hotel/address";
import {ActivatedRoute, Router} from "@angular/router";
import {Room} from "../models-hotel/room";

@Component({
  selector: 'system-administrator',
  templateUrl: './system-administrator.component.html'
})
export class SystemAdministratorComponent implements OnInit {
  hotel: Hotel = new Hotel();
  hotels: Hotel[];
  url: string;

  constructor(private hotelService: HotelService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.hotel.address = new Address();
    this.hotel.rooms = [];
    this.url = this.activatedRoute.snapshot.paramMap.get("id");
  }
  ngOnInit(): void {
    this.findAll();
  }

  public findAll() {
    this.hotelService.findAll().subscribe(data => {
      this.hotels = data;
    })
  }

  public create() {
    this.hotelService.create(this.hotel).subscribe(value => {
      this.findAll();
    });
  }

  public delete(id: number) {
    this.hotelService.delete(id).subscribe(value => {
      this.findAll();
    })
  }
}

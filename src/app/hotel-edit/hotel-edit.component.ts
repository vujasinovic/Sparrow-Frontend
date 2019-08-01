import {Component, OnInit} from "@angular/core";
import {Hotel} from "../models-hotel/hotel";
import {HotelService} from "../hotels/hotel.service";
import {Address} from "../models-hotel/address";
import {ActivatedRoute, Router} from "@angular/router";
import {EditHotel} from "../dto/edit-hotel";

@Component({
  selector: 'hotel-edit',
  templateUrl: './hotel-edit.component.html'
})
export class HotelEditComponent implements OnInit {
  hotel : Hotel = new Hotel();
  editHotel: EditHotel = new EditHotel();
  url: string;

  ngOnInit(): void {
    this.findOne();
  }

  constructor(private hotelService: HotelService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.editHotel.address = new Address();
    this.url = this.activatedRoute.snapshot.paramMap.get('id');
    this.editHotel.id = +this.url;
  }

  public findOne() {
    this.hotelService.findOne(+this.url).subscribe(data => {
      this.editHotel.name = data.name;
      this.editHotel.address.address = data.address.address;
      this.editHotel.description = data.description;
    })
  }

  public update() {
    this.hotelService.update(this.editHotel).subscribe(value => {
        this.router.navigateByUrl('hotels/' + this.url);
    })
  }
}

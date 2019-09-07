import {Component, OnInit} from "@angular/core";
import {Room} from "../models-hotel/room";
import {HotelService} from "../hotels/hotel.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HotelProfileService} from "../hotel-profile/hotel-profile.service";

@Component({
  selector: 'hotel-room-edit',
  templateUrl: './hotel-room-edit.component.html'
})
export class HotelRoomEditComponent implements OnInit {
  room: Room = new Room();
  hotelId: string;
  roomId: string;

  ngOnInit(): void {
    this.findRoom();
  }

  constructor(private hotelService: HotelService, private activatedRoute: ActivatedRoute, private router: Router, private hotelProfileService: HotelProfileService) {
    this.hotelId = activatedRoute.snapshot.paramMap.get("hotelId");
    this.roomId = activatedRoute.snapshot.paramMap.get("roomId");
  }

  public findRoom() {
    this.hotelProfileService.findRoom(+this.roomId).subscribe(data => {
      this.room = data;
    })
  }

  public updateRoom() {
    this.hotelService.updateRoom(this.room, +this.hotelId, +this.roomId).subscribe(
      value => {
        this.router.navigateByUrl('hotels/' + this.hotelId);
      },
      error => {
        alert('Cannot update room. Room is reserved!');
        this.router.navigateByUrl('hotels/' + this.hotelId);
      });
  }
}

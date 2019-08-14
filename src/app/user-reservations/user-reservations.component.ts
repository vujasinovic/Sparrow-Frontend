import {Component, OnInit} from "@angular/core";
import {UserReservationsService} from "./user-reservations.service";
import {HotelReservationDto} from "../dto/hotel-reservation-dto";


@Component({
  templateUrl: './user-reservations.component.html',
  selector: 'user-reservations'
})
export class UserReservationsComponent implements OnInit{

  hotelReservationsActive: HotelReservationDto[];
  hotelReservationsFinished: HotelReservationDto[];

  activeRooms : string;
  finishedRooms: string;

  constructor(private userReservationsService: UserReservationsService) {

  }

  ngOnInit(): void {
    this.findAllActive();
    this.findAllFinished();
  }

  public findAllActive() {
    let reservationActiveRooms : string = '';

    this.userReservationsService.findAllActive().subscribe(data => {
      this.hotelReservationsActive = data;
      this.hotelReservationsActive.forEach(function (reservation) {
        reservation.rooms.forEach(function (room) {
          reservationActiveRooms = room.name + ', ';
        })
      });
      this.activeRooms = reservationActiveRooms.slice(0, -1);
    });
  }

  public findAllFinished() {
    let reservationFinishedRooms : string = '';

    this.userReservationsService.findAllFinished().subscribe(data => {
      this.hotelReservationsFinished = data;
      this.hotelReservationsFinished.forEach(function (reservation) {
        reservation.rooms.forEach(function (room) {
          reservationFinishedRooms = room.name + ', ';
        })
      });
      this.finishedRooms = reservationFinishedRooms.slice(0, -1);
    });
  }
}

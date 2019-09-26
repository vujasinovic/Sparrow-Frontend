import {Component, OnInit} from "@angular/core";
import {UserReservationsService} from "./user-reservations.service";
import {HotelReservationDto} from "../dto/hotel-reservation-dto";
import {Hotel} from "../models-hotel/hotel";
import {HotelReservation} from "../models-hotel/hotel-reservation";
import * as moment from 'moment';
import {HotelService} from "../hotels/hotel.service";
import {CarReservationDto} from "../dto/car-reservation-dto";
import {RentacarsService} from "../rentacars/rentacars.service";


@Component({
  templateUrl: './user-reservations.component.html',
  selector: 'user-reservations'
})
export class UserReservationsComponent implements OnInit {

  hotelReservationsActive: HotelReservationDto[];
  hotelReservationsFinished: HotelReservationDto[];

  carReservationsActive:CarReservationDto[];
  carReservationsFinished:CarReservationDto[];

  activeCars: string;
  finishedCars: string;

  activeRooms: string;
  finishedRooms: string;
  daysDifference: number;

  constructor(private userReservationsService: UserReservationsService, private hotelService: HotelService , private rentacarService : RentacarsService) {
  }

  ngOnInit(): void {
    this.findAllActive();
    this.findAllFinished();
    this.findAllActiveCars();
    this.findAllFinishedCars();
  }

  public findAllActiveCars(){
    this.userReservationsService.findAllActiveCars().subscribe(data => {
      this.carReservationsActive = data;
    })

  }

  public findAllFinishedCars(){
    this.userReservationsService.findAllFinsihedCars().subscribe(data => {
      this.carReservationsFinished = data;
    })

  }

  public findAllActive() {
    let reservationActiveRooms: string = '';

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

  cancelCarReservation(carReservation : CarReservationDto) {
    let start = moment(carReservation.start.toString(), "YYYY-MM-DD");
    let today = moment().startOf('day').format('YYYY-MM-DD');

    this.daysDifference = moment.duration(start.diff(today)).asDays();
    if (this.daysDifference < 2 && this.daysDifference >= 0) {
      alert('Reservations cannot be canceled 48h before start date.');
      return;
    } else {
      this.rentacarService.deleteCarReservation(carReservation.id).subscribe(data => {
        this.findAllActiveCars();
      });
    }
  }

  public findAllFinished() {
    let reservationFinishedRooms: string = '';

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

  cancelReservation(hotelReservation: HotelReservationDto) {
    let start = moment(hotelReservation.start.toString(), "YYYY-MM-DD");
    let today = moment().startOf('day').format('YYYY-MM-DD');

    this.daysDifference = moment.duration(start.diff(today)).asDays();
    if (this.daysDifference < 2 && this.daysDifference >= 0) {
      alert('Reservations cannot be canceled 48h before check-in');
      return;
    } else {
      this.hotelService.deleteReservation(hotelReservation.id).subscribe(data => {
         this.findAllActive();
      });
    }
  }


}

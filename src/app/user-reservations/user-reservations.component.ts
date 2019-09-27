import {Component, OnInit} from "@angular/core";
import {UserReservationsService} from "./user-reservations.service";
import {HotelReservationDto} from "../dto/hotel-reservation-dto";
import {Hotel} from "../models-hotel/hotel";
import * as moment from 'moment';
import {HotelService} from "../hotels/hotel.service";
import {CarReservationDto} from "../dto/car-reservation-dto";
import {RentacarsService} from "../rentacars/rentacars.service";
import {RentacarSaleComponent} from "../rentacar-sale/rentacar-sale.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {EditHotel} from "../dto/edit-hotel";
import {Rentacar} from "../models-rac/rentacar";



@Component({
  templateUrl: './user-reservations.component.html',
  selector: 'user-reservations'
})

export class UserReservationsComponent implements OnInit {

  hotelReservationsActive: HotelReservationDto[];
  hotelReservationsFinished: HotelReservationDto[];

  carReservationsActive:CarReservationDto[];
  carReservationsFinished:CarReservationDto[];

  hotelInfo : Hotel[];
  rateHotel : Hotel;
  editHotel: EditHotel = new EditHotel();

  rentacarInfo: Rentacar[];

  currentRating : number = 3;

  newRating: number;
  newNoOfRatings:number;

  activeRooms: string;
  finishedRooms: string;
  daysDifference: number;

  constructor(private userReservationsService: UserReservationsService, private hotelService: HotelService , private rentacarService : RentacarsService , private modalService: NgbModal ,
                  ) {

    this.carReservationsActive = [];
    this.carReservationsFinished = [];
    this.hotelReservationsActive = [];
    this.hotelReservationsFinished = [];
  }

  ngOnInit(): void {
    this.findAllActive();
    this.findAllFinished();
    this.findAllActiveCars();
    this.findAllFinishedCars();
    this.findAllHotels();
    this.findAllRentacars();
  }

  public findAllActiveCars(){
    this.userReservationsService.findAllActiveCars().subscribe(data => {
      this.carReservationsActive = data;
    })

  }
  public findAllRentacars(){
    this.rentacarService.findAll().subscribe(data => {
      this.rentacarInfo = data;
    })
  }

  public findAllHotels(){
    this.hotelService.findAll().subscribe(data => {
      this.hotelInfo = data;
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

  saveRatings(){

    this.newNoOfRatings = this.rateHotel.noOfScores + 1;
    this.newRating = ((this.rateHotel.avgScore * this.rateHotel.noOfScores)+ this.currentRating)/this.newNoOfRatings;

    this.editHotel.id = this.rateHotel.id;
    this.editHotel.address = this.rateHotel.address;
    this.editHotel.description = this.rateHotel.description;
    this.editHotel.name = this.rateHotel.name;
    this.editHotel.avgScore = this.newRating;
    this.editHotel.noOfScores = this.newNoOfRatings;

    this.hotelService.update(this.editHotel).subscribe(value => {

    })
    window.location.reload();
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


  openWindowRating(content , hotelId : number) {

    for(let i = 0 ; i < this.hotelInfo.length ; i++){
      if(this.hotelInfo[i].id == hotelId){
        this.rateHotel = this.hotelInfo[i];
      }
      console.log(this.rateHotel.id);
    }
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }


  sendDates(hotelReservation: HotelReservationDto) {
      RentacarSaleComponent.prototype.tripEnd = hotelReservation.end;
      RentacarSaleComponent.prototype.tripStart = hotelReservation.start;
  }
}

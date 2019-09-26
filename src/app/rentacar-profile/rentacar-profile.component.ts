import { Component, OnInit } from '@angular/core';
import {Rentacar} from "../models-rac/rentacar";
import {RentacarProfileService} from "./rentacar-profile.service";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../login/auth.service";
import {Car} from "../models-rac/car";
import {User} from "../user";
import {Address} from "../models-hotel/address";
import {MarkerManager} from "@agm/core";
import {Dealership} from "../models-rac/dealership";
import {CarSearchDto} from "../dto/car-search-dto";
import {AddCarDto} from "../dto/add-car-dto";
import {PriceListItem} from "../models-hotel/pricelist-item";
import {HotelReservationComponent} from "../hotel-reservation/hotel-reservation.component";
import {CarReservation} from "../dto/car-reservation";
import {CarReservationComponent} from "../car-reservation/car-reservation.component";

@Component({
  selector: 'rentacar-profile',
  templateUrl: './rentacar-profile.component.html',
})
export class RentacarProfileComponent implements OnInit {

  rentacar: Rentacar = new Rentacar();
  carQuantity: number;
  dealershipQuantity: number;
  rentacarId: string;
  cars: Car[];
  address: Address;
  dealerships: Dealership[];
  carSearchDto: CarSearchDto = new CarSearchDto();
  maxSeats: number;
  carSearchErrorMsg: string = '';
  carSearchInfomsg: string = '';
  addCarDto: AddCarDto = new AddCarDto();
  carReservation : CarReservation = new CarReservation();
  carsForReservation : Car[];
  addCar: Car = new Car();

  public user: User = new User();

  constructor(private rentacarProfileService: RentacarProfileService, private activatedRoute: ActivatedRoute, private authService: AuthService) {
    this.address = new Address();
    this.carQuantity = 0;
    this.rentacarId = this.activatedRoute.snapshot.paramMap.get("id");
    this.carsForReservation = [];
    this.user.role = '';
    this.user = this.authService.getLoggedUser();
    console.log(this.user.role);

  }

  ngOnInit(): void {
    this.findCars();

  }

  public findMostSeats() {
    let seats = [];
    this.rentacar.cars.forEach(function (cars) {
      seats.push(cars.seats);

    })
    console.log(seats)
    this.maxSeats = Math.max(...seats)
  }

  public findAllDealerships() {
    this.dealerships = [];
    for (let i = 0; i < this.dealershipQuantity; i++) {
      this.dealerships.push(this.rentacar.dealerships[i]);
      console.log('Retrieveig dealership ', this.rentacar.dealerships[i]);
    }
    ;
  }

  public findAllCars() {
    this.cars = [];
    for (let i = 0; i < this.carQuantity; i++) {
      this.cars.push(this.rentacar.cars[i]);
      console.log('Retrieving car ', this.rentacar.cars[i]);
    }
    ;
  }

  public searchCars() {
    if (this.carSearchDto.seats > this.maxSeats) {
      this.carSearchErrorMsg = 'There is no car with that many seats available.';
      return;
    }
    if(this.carSearchDto.end < this.carSearchDto.start){
      this.carSearchErrorMsg = 'End Date has to be larger than start Date';
      return;
    }
    if(this.carSearchDto.seats === 0 || this.carSearchDto.seats === null || this.carSearchDto.seats >15){
      this.carSearchErrorMsg = 'Plase enter seat number between 1-15';
      return;
    }

    this.rentacarProfileService.searchCars(this.carSearchDto , +this.rentacarId).subscribe(data => {
      console.log('results:', data)
      this.cars = data;
    })


  }

  public createCar() {
    this.rentacarProfileService.createCar(this.addCar, +this.rentacarId).subscribe(value => {
      this.findCars();
    })
  }

  public findCars() {
    this.rentacarProfileService.findOne(+this.rentacarId).subscribe(data => {
      this.rentacar = data;
      this.carQuantity = this.rentacar.cars.length;
      this.dealershipQuantity = this.rentacar.dealerships.length;
      this.address = this.rentacar.address;

      this.findAllDealerships();
      if(this.user.role == 'ROLE_HOTEL_ADMIN'){

        this.findAllCars();
      }

      this.findMostSeats();

    })
  }

  public deleteCar(carId: number) {
    this.rentacarProfileService.deleteCar(carId).subscribe(value => {
      this.findCars();
    })
  }

  toggleCarStatus(e, car: Car) {

      this.carReservation.car = car;
      this.carReservation.checked = e.target.checked;
      console.log('Checked: ', this.carReservation.car.id, '[', this.carReservation.checked, ']');


      if (this.carReservation.checked) {
        this.carsForReservation.push(car);
      } else {
        const index: number = this.carsForReservation.indexOf(car);
        if (index !== -1) {
          this.carsForReservation.splice(index, 1);
        }
      }
      console.log('Reservation status: ', this.carsForReservation);
      CarReservationComponent.prototype.cars = this.carsForReservation;
    }

    public sendDates(){

    CarReservationComponent.prototype.start = this.carSearchDto.start;
    CarReservationComponent.prototype.end = this.carSearchDto.end;
    }
  }


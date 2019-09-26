import { Component, OnInit } from '@angular/core';
import {Car} from "../models-rac/car";
import {RentacarsService} from "../rentacars/rentacars.service";
import {ActivatedRoute, Router} from "@angular/router";
import {RentacarProfileService} from "../rentacar-profile/rentacar-profile.service";
import {CarSale} from "../models-rac/carSale";

@Component({
  selector: 'app-car-sale',
  templateUrl: './car-sale.component.html'
})
export class CarSaleComponent implements OnInit {

  car: Car = new Car();
  rentaCarId: string;
  carId: string;
  carSale: CarSale = new CarSale();

  constructor(private rentacarService : RentacarsService , private activatedRoute: ActivatedRoute , private router : Router , private rentacarProfileService : RentacarProfileService) {
    this.rentaCarId = activatedRoute.snapshot.paramMap.get("rentacarId");
    this.carId = activatedRoute.snapshot.paramMap.get("carId");

  }

  ngOnInit() {
    this.findCar();
  }

  public findCar(){
    this.rentacarProfileService.findCar(+this.carId).subscribe(data => {
      this.car = data;
    })
  }

  public createCarSale(){
    this.rentacarService.createSaleCar(this.carSale, +this.rentaCarId , +this.carId).subscribe(value => {
      this.router.navigateByUrl('rentacars/' + this.rentaCarId);
    })
  }

}

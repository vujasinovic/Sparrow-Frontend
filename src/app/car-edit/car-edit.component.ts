import { Component, OnInit } from '@angular/core';
import {Car} from "../models-rac/car";
import {Rentacar} from "../models-rac/rentacar";
import {RentacarsService} from "../rentacars/rentacars.service";
import {ActivatedRoute, Router} from "@angular/router";
import {RentacarProfileService} from "../rentacar-profile/rentacar-profile.service";

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
})
export class CarEditComponent implements OnInit {

  car: Car = new Car();
  rentaCarId: string;
  carId: string;

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

  public updateCar(){
    this.rentacarService.updateCar(this.car, +this.rentaCarId , +this.carId).subscribe(value => {
      this.router.navigateByUrl('rentacars/' + this.rentaCarId);
    })
  }
}

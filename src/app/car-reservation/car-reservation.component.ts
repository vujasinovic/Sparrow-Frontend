import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../login/auth.service";
import {RentacarsService} from "../rentacars/rentacars.service";
import {RentacarProfileService} from "../rentacar-profile/rentacar-profile.service";
import {Car} from "../models-rac/car";
import {CarReservationModel} from "../models-rac/carReservation";
import {User} from "../user";

@Component({
  selector: 'app-car-reservation',
  templateUrl: './car-reservation.component.html'
})
export class CarReservationComponent implements OnInit {
  url: string;
  price : number = 0;
  totalPrice: number = 0;
  carReservation: CarReservationModel = new CarReservationModel() ;

  public user: User = new User();

  @Input() cars : Car[];
  @Input() start: Date;
  @Input() end : Date


  ngOnInit(): void {
    this.carReservation.cars = [];

        for (let i = 0; i < this.cars.length; i++) {
      this.carReservation.cars.push(this.cars[i]);
    }

  }

  constructor(private router: Router, private rentacarsService : RentacarsService, private rentacarProfileService: RentacarProfileService,
              private activatedRoute: ActivatedRoute, private authService: AuthService) {
    this.url = this.activatedRoute.snapshot.paramMap.get("id");
    this.user.role = '';
    this.user = this.authService.getLoggedUser();


    for (let i = 0; i < this.cars.length; i++) {
      this.totalPrice += this.cars[i].price;
    }
    this.carReservation.start = this.start;
    this.carReservation.end = this.end;


    console.log(this.user);
  }

  public makeCarReservation(){
    this.carReservation.price = this.totalPrice;
    this.carReservation.user = this.user;

    this.rentacarsService.makeReservation(this.carReservation).subscribe(data => {
      this.router.navigateByUrl('reservations');
    })

  }


}

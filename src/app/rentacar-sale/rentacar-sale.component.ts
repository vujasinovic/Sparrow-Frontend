import {Component, Input, OnInit} from "@angular/core";
import {RentacarsService} from "../rentacars/rentacars.service";
import {CarSale} from "../models-rac/carSale";
import {CarReservationModel} from "../models-rac/carReservation";
import {AuthService} from "../login/auth.service";
import {User} from "../user";

@Component({
  selector: 'rentacar-sales',
  templateUrl: './rentacar-sale.component.html'
})
export class RentacarSaleComponent implements OnInit {

  carReservation: CarReservationModel = new CarReservationModel();
  carsSale : CarSale[];

  user: User = new User();

  @Input()
  tripStart: Date;

  @Input()
  tripEnd: Date;

  ngOnInit(): void {
    this.findAll();
    console.log(this.tripStart);
  }

  constructor(private rentaCarService: RentacarsService, private authService: AuthService) {
      this.user = this.authService.getLoggedUser();
      this.carReservation.cars = [];
  }

  public findAll() {
    this.rentaCarService.getCarSales().subscribe(data => {
      this.carsSale = data;
    })
  }

  makeReservation(carSale: CarSale) {
    this.carReservation.cars.push(carSale.car);
    this.carReservation.end = carSale.end;
    this.carReservation.start = carSale.start;
    this.carReservation.user = this.user;
    this.carReservation.price = carSale.price;

    this.rentaCarService.makeReservation(this.carReservation).subscribe(() => {
    });
  }
}

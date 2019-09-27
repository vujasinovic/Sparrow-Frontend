import {Component, Input, OnInit} from "@angular/core";
import {RentacarsService} from "../rentacars/rentacars.service";
import {CarSale} from "../models-rac/carSale";
import {CarReservationModel} from "../models-rac/carReservation";
import {AuthService} from "../login/auth.service";
import {User} from "../user";
import {DatesDto} from "../dto/dates-dto";
import {Router} from "@angular/router";

@Component({
  selector: 'rentacar-sales',
  templateUrl: './rentacar-sale.component.html'
})
export class RentacarSaleComponent implements OnInit {

  carReservation: CarReservationModel = new CarReservationModel();
  carsSale : CarSale[];

  datesDto : DatesDto = new DatesDto();

  user: User = new User();

  @Input()
  tripStart: Date;

  @Input()
  tripEnd: Date;

  ngOnInit(): void {
    this.datesDto.start = this.tripStart;
    this.datesDto.end = this.tripEnd;
    this.findAllDate(this.datesDto);

  }

  constructor(private rentaCarService: RentacarsService, private authService: AuthService,private router: Router) {
      this.user = this.authService.getLoggedUser();
      this.carReservation.cars = [];
  }
  public findAllDate(dates : DatesDto){
    this.rentaCarService.getCarSalesByDate(dates).subscribe(data => {
      this.carsSale = data;
    })
  }

  public findAll() {
    this.rentaCarService.getCarSales().subscribe(data => {
      this.carsSale = data;
    })
  }

  makeReservation(carSale: CarSale) {
    this.carReservation.cars.push(carSale.car);
    this.carReservation.end = this.datesDto.end;
    this.carReservation.start = this.datesDto.start;
    this.carReservation.user = this.user;
    this.carReservation.price = carSale.price;

    this.rentaCarService.makeReservation(this.carReservation).subscribe(() => {
      this.router.navigateByUrl('reservations');
    });
  }
}

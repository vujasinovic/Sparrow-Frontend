import {Component, Input, OnInit} from "@angular/core";
import {HotelProfileService} from "../hotel-profile/hotel-profile.service";
import {HotelServices} from "../models-hotel/hotel-services";
import {ActivatedRoute, Router} from "@angular/router";
import {PriceListItem} from "../models-hotel/pricelist-item";
import {HotelReservation} from "../models-hotel/hotel-reservation";
import {AuthService} from "../login/auth.service";
import {User} from "../user";
import {HotelService} from "../hotels/hotel.service";

@Component({
  selector: 'hotel-reservation',
  templateUrl: './hotel-reservation.component.html'
})
export class HotelReservationComponent implements OnInit {
  hotelServices: HotelServices[];
  url: string;
  checkedHotelServices: HotelServices[];
  additionalServicesPrice: number = 0;
  roomsPrice: number = 0;
  totalPrice: number = 0;

  @Input() priceListItems: PriceListItem[];
  @Input() start: Date;
  @Input() end: Date;

  public user: User = new User();
  hotelReservation: HotelReservation = new HotelReservation();

  ngOnInit(): void {
    this.findHotelServices();
    this.checkedHotelServices = [];

    this.hotelReservation.rooms = [];
    this.hotelReservation.hotelServices = [];

    for (let i = 0; i < this.priceListItems.length; i++) {
      this.hotelReservation.rooms.push(this.priceListItems[i].room); // reservation rooms
      this.roomsPrice += this.priceListItems[i].price;
      this.totalPrice = this.roomsPrice;
    }

    this.hotelReservation.start = this.start;
    this.hotelReservation.end = this.end;
    console.log('Reservation status: ', this.hotelReservation);
  }

  constructor(private router: Router, private hotelService: HotelService, private hotelProfileService: HotelProfileService, private activatedRoute: ActivatedRoute, private authService: AuthService) {
    this.url = this.activatedRoute.snapshot.paramMap.get("id");
    this.user.role = '';
    this.user = this.authService.getLoggedUser();
    console.log(this.user);
  }

  public findHotelServices() {
    this.hotelProfileService.findHotelServices(+this.url).subscribe(data => {
      this.hotelServices = data;
      console.log('Hotel services: ', this.hotelServices);
    })
  }


  toggleExtraServices(e, hs: HotelServices) {
    if (e.target.checked) {
      this.checkedHotelServices.push(hs);
      this.additionalServicesPrice += hs.price;
      this.totalPrice += hs.price;
    } else {
      const index: number = this.checkedHotelServices.indexOf(hs);
      if (index !== -1) {
        this.checkedHotelServices.splice(index, 1);
        this.additionalServicesPrice -= hs.price;
        this.totalPrice -= hs.price;
      }
    }
    this.hotelReservation.hotelServices = this.checkedHotelServices;
    console.log('Reservation status', this.hotelReservation);
  }

  public makeReservation() {
    this.hotelReservation.price = this.totalPrice;
    this.hotelReservation.user = this.user;

    this.hotelService.makeReservation(this.hotelReservation).subscribe(data => {
      this.router.navigateByUrl('reservations');
    });
  }
}

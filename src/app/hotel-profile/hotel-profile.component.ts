import {Component, OnInit} from "@angular/core";
import {Hotel} from "../models-hotel/hotel";
import {HotelProfileService} from "./hotel-profile.service";
import {ActivatedRoute} from "@angular/router";
import {PriceListItem} from "../models-hotel/pricelist-item";
import {HotelServices} from "../models-hotel/hotel-services";
import {Address} from "../models-hotel/address";
import {Room} from "../models-hotel/room";
import {ExtraService} from "../models-hotel/extra-service";
import {catchError} from "rxjs/operators";
import {throwError} from 'rxjs';

@Component({
  selector: 'hotel-profile',
  templateUrl: './hotel-profile.component.html'
})
export class HotelProfileComponent implements OnInit {
  hotel: Hotel = new Hotel();
  priceListItem: PriceListItem = new PriceListItem();
  priceListItems: PriceListItem[];
  hotelServices: HotelServices[];
  freeRooms: number;
  freeBeds: number;
  extraServices: ExtraService[];
  es: ExtraService = new ExtraService();
  hotelService: HotelServices = new HotelServices();
  selectedExtraService : ExtraService = new ExtraService();

  flag: boolean;
  url: string;
  serviceExistError: string;

  constructor(private hotelProfileService: HotelProfileService, private activatedRoute: ActivatedRoute) {
    this.hotel.address = new Address();
    this.priceListItem.room = new Room();
    this.hotelService.extraService = new ExtraService();
    this.es = new ExtraService();
    this.hotelService.extraService = this.es;
    this.url = this.activatedRoute.snapshot.paramMap.get("id");
    this.freeBeds = 0;
    this.freeRooms = 0;
    this.hotelService.hotel = new Hotel();
  }

  ngOnInit(): void {
    this.hotelProfileService.findOne(+this.url).subscribe(data => {
      this.hotel = data;

      this.freeRooms = this.hotel.rooms.length;
      console.log('Hotels');
      console.log(this.hotel);

      for (let i = 0; i < this.hotel.rooms.length; i++) {
        console.log(this.hotel.rooms[i]);
        this.freeBeds += this.hotel.rooms[i].bedsNo;
      }

    });
    this.findPriceList();
    this.findHotelServices();
    this.findExtraServices();
  }

  public findExtraServices() {
    this.hotelProfileService.findExtraServices().subscribe(data => {
      this.extraServices = data;
      this.selectedExtraService = data[0];
      console.log('Extra services: ');
      console.log(this.extraServices);


    })
  }


  public addHotelService() {
    this.serviceExistError = null;
    if (this.hotelService.extraService.name == null || this.hotelService.extraService.name == undefined) {
      this.hotelService.extraService.name = this.selectedExtraService.name;
    }

    this.hotelProfileService.addHotelService(this.hotelService, +this.url).pipe(catchError(err => {
        this.serviceExistError = err.error.message;
        return throwError(err);
      })
    ).subscribe(value => {
      this.findHotelServices();
    })
  }

  public findPriceList() {
    this.hotelProfileService.findPriceList(+this.url).subscribe(data => {
      this.priceListItems = data;

      console.log('PriceListItems');
      console.log(this.priceListItems);
    })
  }

  public findHotelServices() {
    this.hotelProfileService.findHotelServices(+this.url).subscribe(data => {
      this.hotelServices = data;
      console.log('Hotel services: ');
      console.log(this.hotelServices);
    })
  }

  public createPriceListItem() {
    this.hotelProfileService.createPriceListItem(this.priceListItem, +this.url).subscribe(value => {
      this.findPriceList();
    })
  }

  public deletePriceListItem(id: number) {
    this.hotelProfileService.deletePriceListItem(id).subscribe(value => {
      this.findPriceList();
    })
  }

  public deleteHotelService(id: number) {
    this.hotelProfileService.deleteHotelService(id, +this.url).subscribe(value => {
      this.findHotelServices();
    })
  }
}

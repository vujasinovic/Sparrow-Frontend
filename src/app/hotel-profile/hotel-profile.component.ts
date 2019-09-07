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
import {User} from "../user";
import {AuthService} from "../login/auth.service";
import {RoomReservation} from "../models-hotel/room-reservation";
import {HotelReservationComponent} from "../hotel-reservation/hotel-reservation.component";
import {RoomsSearchDto} from "../dto/rooms-search-dto";

@Component({
  selector: 'hotel-profile',
  templateUrl: './hotel-profile.component.html'
})
export class HotelProfileComponent implements OnInit {
  hotel: Hotel = new Hotel();
  priceListItem: PriceListItem = new PriceListItem();
  priceListItems: PriceListItem[];
  hotelServices: HotelServices[];
  rooms: number;
  beds: number;
  extraServices: ExtraService[];
  es: ExtraService = new ExtraService();
  hotelService: HotelServices = new HotelServices();
  selectedExtraService: ExtraService = new ExtraService();

  freeRooms: number;
  freeBeds: number;

  hotelId: string;
  serviceExistError: string;

  address: Address;

  public user: User = new User();

  plItems: PriceListItem[];
  roomReservation: RoomReservation = new RoomReservation();

  roomsSearchDto: RoomsSearchDto = new RoomsSearchDto();
  roomSearchErrorMessage: string = '';
  roomSearchInfoMessage: string = '';

  constructor(private hotelProfileService: HotelProfileService, private activatedRoute: ActivatedRoute, private authService: AuthService) {
    this.hotel.address = new Address();
    this.priceListItem.room = new Room();
    this.hotelService.extraService = new ExtraService();
    this.es = new ExtraService();
    this.hotelService.extraService = this.es;
    this.hotelId = this.activatedRoute.snapshot.paramMap.get("id");
    this.beds = 0;
    this.rooms = 0;
    this.freeRooms = 0;
    this.freeBeds = 0;
    this.hotelService.hotel = new Hotel();
    this.user.role = '';
    this.user = this.authService.getLoggedUser();
    console.log(this.user);

    this.plItems = [];
  }

  ngOnInit(): void {
    this.hotelProfileService.findOne(+this.hotelId).subscribe(data => {
      this.hotel = data;
      this.rooms = this.hotel.rooms.length;

      for (let i = 0; i < this.hotel.rooms.length; i++) {
        this.beds += this.hotel.rooms[i].bedsNo;
      }

    });
    this.findPriceListItems();
    this.findHotelServices();
    this.findExtraServices();
  }

  public findExtraServices() {
    this.hotelProfileService.findExtraServices().subscribe(data => {
      this.extraServices = data;
      this.selectedExtraService = data[0];
    })
  }


  public addHotelService() {
    this.serviceExistError = null;
    if (this.hotelService.extraService.name == null || this.hotelService.extraService.name == undefined) {
      this.hotelService.extraService.name = this.selectedExtraService.name;
    }

    this.hotelProfileService.addHotelService(this.hotelService, +this.hotelId).pipe(catchError(err => {
        this.serviceExistError = err.error.message;
        return throwError(err);
      })
    ).subscribe(value => {
      this.findHotelServices();
    })
  }

  public findPriceListItems() {
    this.hotelProfileService.findPriceListItems(+this.hotelId).subscribe(data => {
      this.freeRooms = data.length;
      for (let i = 0; i < data.length; i++) {
        this.freeBeds += data[i].room.bedsNo;
      }
      this.priceListItems = data;
    })
  }

  public findHotelServices() {
    this.hotelProfileService.findHotelServices(+this.hotelId).subscribe(data => {
      this.hotelServices = data;
    })
  }

  public createPriceListItem() {
    this.hotelProfileService.createPriceListItem(this.priceListItem, +this.hotelId).subscribe(value => {
      this.findPriceListItems();
    })
  }

  public deletePriceListItem(id: number) {
    this.hotelProfileService.deletePriceListItem(id).subscribe(value => {
      this.findPriceListItems();
    },
      error => {
        alert('Cannot delete room which is reserved');
      })
  }

  public deleteHotelService(id: number) {
    this.hotelProfileService.deleteHotelService(id, +this.hotelId).subscribe(value => {
      this.findHotelServices();
    })
  }

  toggleRoomStatus(e, priceListItem: PriceListItem) {
    this.roomReservation.priceListItem = priceListItem;
    this.roomReservation.checked = e.target.checked;
    console.log('Checked: ', this.roomReservation.priceListItem.room.name, '[', this.roomReservation.checked, ']');

    if (this.roomReservation.checked) {
      this.plItems.push(priceListItem);
    } else {
      const index: number = this.plItems.indexOf(priceListItem);
      if (index !== -1) {
        this.plItems.splice(index, 1);
      }
    }
    console.log('Reservation status: ', this.plItems);
    HotelReservationComponent.prototype.priceListItems = this.plItems;
  }

  public searchRooms() {
    if (this.roomsSearchDto.guests > this.roomsSearchDto.capacity * this.roomsSearchDto.rooms) {
      this.roomSearchErrorMessage = 'Number of guests is greater then total capacity of room(s).';
      return;
    }
    this.hotelProfileService.searchRooms(this.roomsSearchDto, +this.hotelId).subscribe(data => {
      console.log('Results: ', data);
      let capacity = this.roomsSearchDto.capacity;

      let rooms = [];
      data.forEach(function (priceListItem) {
        if (priceListItem.room.bedsNo === capacity) {
          rooms.push(priceListItem.room);
        }
      });
      if (rooms.length < this.roomsSearchDto.rooms) {
        if (rooms.length === 1) {
          this.roomSearchInfoMessage = 'Unfortunately, there is only ' + rooms.length + ' available room with provided configuration. Here are other available rooms that can fit your number of guests.'
        } else if (rooms.length === 0) {
          this.roomSearchInfoMessage = 'Unfortunately, there no available room(s) with provided configuration. Here are other available rooms that can fit your number of guests.'
        } else {
          this.roomSearchInfoMessage = 'Unfortunately, there are only ' + rooms.length + ' available rooms with provided configuration. Here are other available rooms that can fit your number of guests.'
        }
      }
      this.priceListItems = data;
    })
  }

  public sendDates() {
    HotelReservationComponent.prototype.start = this.roomsSearchDto.start;
    HotelReservationComponent.prototype.end = this.roomsSearchDto.end;
  }
}

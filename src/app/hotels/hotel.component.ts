import {Component, OnInit} from "@angular/core";
import {Hotel} from "../models-hotel/hotel";
import {HotelService} from "./hotel.service";
import {HotelSearchDto} from "../dto/hotel-search-dto";
import {FormBuilder} from "@angular/forms";
import {NgbModal, NgbRatingConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'hotels',
  templateUrl: './hotel.component.html',
})
export class HotelComponent implements OnInit {
  hotels: Hotel[];
  hotelSearchDto: HotelSearchDto = new HotelSearchDto();
  errorMsg: string = '';
  errorMsgRequired: string = '';

  constructor(private hotelService: HotelService, private fb: FormBuilder, private config: NgbRatingConfig, private modalService: NgbModal) {
    config.max = 5;
    config.readonly = true;
    this.initSearchDto();
  }

  ngOnInit(): void {
    this.findAll();

  }

  public findAll() {
    this.hotelService.findAll().subscribe(data => {
      this.hotels = data;
      this.hotels.forEach(function (hotel) {
        let prices = [];
        if (hotel.priceLists.length === 0) {
          hotel.minRoomPrice = 0;
        } else {
          hotel.priceLists[0].items.forEach(function (item) {
            prices.push(item.price);
          });
          hotel.minRoomPrice = Math.min(...prices);
        }
      });
    })
  }

  public search() {

    if (this.hotelSearchDto.place === '' ||
      this.hotelSearchDto.start === null ||
      this.hotelSearchDto.end === null) {
      this.errorMsgRequired = 'All fields are required';
      return;
    }

    this.clearErrorMsgRequired();

    this.hotelService.search(this.hotelSearchDto).subscribe(data => {
      if (data.length == 0) {
        this.errorMsg = 'No results found.';
      }
      this.hotels = data;
    })
  }

  public initSearchDto() {
    this.hotelSearchDto.end = null;
    this.hotelSearchDto.start = null;
    this.hotelSearchDto.place = '';
  }

  public clearErrorMsgRequired() {
    this.errorMsgRequired = '';
  }

  open(content) {
    this.modalService.open(content, {windowClass: 'mapsModal', ariaLabelledBy: 'modal-basic-title'});
  }
}

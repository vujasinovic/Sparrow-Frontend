import { Component, OnInit } from '@angular/core';
import {Rentacar} from "../models-rac/rentacar";
import {FormBuilder} from "@angular/forms";
import {NgbModal, NgbRatingConfig} from "@ng-bootstrap/ng-bootstrap";
import {RentacarsService} from "./rentacars.service";
import {RentacarSearchDto} from "../dto/rentacar-search-dto";


@Component({
  selector: 'rentacars',
  templateUrl: './rentacars.component.html'
})
export class RentacarsComponent implements OnInit {
  rentacars : Rentacar[];
  rentacarSearchDto : RentacarSearchDto = new RentacarSearchDto();
  errorMsg: string = '';
  errorMsgRequired: string = '';

  constructor(private RentacarsService : RentacarsService , private fb: FormBuilder , private config: NgbRatingConfig, private modalService: NgbModal) {
    config.max = 5;
    config.readonly = true;
    this.initSearchDto();
  }

  ngOnInit(): void {
    this.findAll();
  }

  public findAll(){
    this.RentacarsService.findAll().subscribe(data => {
      this.rentacars = data;
      console.log('Retrieved Rent-A-Cars:' , this.rentacars); /*TODO ITERACIJA I TRAZEANJE NAJMANJE CIJENE AUTA*/

      /*this.rentacars.forEach(function(rentacar){

      })
*/


    })

  }

  public search() {
    console.log(this.rentacarSearchDto);

    if (this.rentacarSearchDto.city === '') {
      this.errorMsgRequired = 'All fields are required';
      return;
    }
    this.clearErrorMsgRequired();


    this.RentacarsService.search(this.rentacarSearchDto).subscribe(data => {
      if (data.length == 0) {
        this.errorMsg = 'No results found.';
      }
      this.rentacars = data;
      console.log('Search results: ', this.rentacars);
    })
  }

  public clearErrorMsgRequired() {
    this.errorMsgRequired = '';
  }


  public initSearchDto() {
    this.rentacarSearchDto.city = null;

  }

  open(content) {
    this.modalService.open(content, {windowClass: 'mapsModal', ariaLabelledBy: 'modal-basic-title'});
  }
}

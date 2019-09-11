import {Component, OnInit} from "@angular/core";
import {HotelService} from "../hotels/hotel.service";
import {ActivatedRoute} from "@angular/router";
import {HotelReservation} from "../models-hotel/hotel-reservation";

@Component({
  templateUrl: './hotel-statistic.component.html',
  selector: 'hotel-statistic'
})
export class HotelStatisticComponent implements OnInit {
  hotelReservations: HotelReservation[];
  public prices: number[];
  public endDates: Date[];

  ngOnInit(): void {
    this.hotelReservations = [];
    this.findAllReservations();
  }

  constructor(private hotelService: HotelService, private activatedRoute: ActivatedRoute) {

  }

  public labels: string[] = [];
  public data: number[] = [];
  public type: string = 'bar';

  // events on slice click
  public chartClicked(e:any):void {
    console.log(e);
  }

  // event on pie chart slice hover
  public chartHovered(e:any):void {
    console.log(e);
  }

  public findAllReservations() {
    this.hotelService.findAllReservations(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe(data => {
      this.hotelReservations = data;
      for (let i = 0; i < this.hotelReservations.length; i++) {
        this.labels.push(this.hotelReservations[i].end.toString());
        this.data.push(this.hotelReservations[i].price);
      }
      console.log(this.labels);
    });
  }


}

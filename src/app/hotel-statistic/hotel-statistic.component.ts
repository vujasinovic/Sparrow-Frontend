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

  ngOnInit(): void {
    this.findAllReservations();
  }

  constructor(private hotelService: HotelService, private activatedRoute: ActivatedRoute) {

  }

  public labels: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  public data: number[] = [0, 0, 0, 0, 0, 0, 0, 102, 0, 0, 0, 0];
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
      console.log(data);
    });
  }

}

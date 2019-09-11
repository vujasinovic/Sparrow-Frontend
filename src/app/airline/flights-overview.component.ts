import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AirlineService} from './airline.service';
import {Flight} from '../models-airline/flight';
import {ActivatedRoute} from '@angular/router';

@Component(
  {
    selector: 'app-flights-overview',
    templateUrl: 'flights-overview.component.html'
  }
)

export class FlightsOverviewComponent {
  flights: Flight[] = [];
  airlineId: number;

  constructor(private httpClient: HttpClient, private airlineService: AirlineService, activatedRoute: ActivatedRoute) {

    airlineService.getAdministrated().subscribe(airline => {
      this.flights = airline.flights;
    });
  }

  editLink(id) {
    return '/edit-flight/' + id;
  }

}

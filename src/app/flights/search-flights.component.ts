import {Component} from '@angular/core';
import {FlightSearchService} from './flight-search.service';
import {Flight} from '../models-airline/flight';

@Component({
  selector: 'app-search-flights',
  templateUrl: 'search-flights.component.html'
})
export class SearchFlightsComponent {
  from = '';
  to = '';
  date: Date;

  results: Flight[] = [];

  constructor(private searchService: FlightSearchService) {
  }


  search() {
    if (this.from && this.to && this.date) {
      this.searchService.search(this.from, this.to, this.date).subscribe(value => this.results = value);
    }
  }
}

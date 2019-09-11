import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Flight} from '../models-airline/flight';
import {Globals} from '../globals';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class FlightSearchService {
  readonly apiUrl;

  constructor(private httpClient: HttpClient, private globals: Globals) {
    this.apiUrl = globals.apiRoot + 'api/airline/search';
  }

  search(from, to, date): Observable<Flight[]> {
    return this.httpClient.get<Flight[]>(this.apiUrl, {
      params: new HttpParams({
        fromObject: {
          from: from,
          to: to,
          departure: date
        }
      })
    });
  }

}

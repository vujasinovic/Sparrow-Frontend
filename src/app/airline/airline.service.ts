import {Injectable} from '@angular/core';
import {Globals} from '../globals';
import {Airline} from '../models-airline/airline';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class AirlineService {
  readonly airlineApi;

  constructor(private globals: Globals, private httpClient: HttpClient) {
    this.airlineApi = globals.apiRoot + 'api/airline';
  }

  create(airline: Airline): Observable<Airline> {
    return this.httpClient.post<Airline>(this.airlineApi, airline);
  }

}

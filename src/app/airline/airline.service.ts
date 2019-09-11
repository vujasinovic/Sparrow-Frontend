import {Injectable} from '@angular/core';
import {Globals} from '../globals';
import {Airline} from '../models-airline/airline';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Flight} from '../models-airline/flight';

@Injectable({providedIn: 'root'})
export class AirlineService {
  readonly airlineApi;

  constructor(private globals: Globals, private httpClient: HttpClient) {
    this.airlineApi = globals.apiRoot + 'api/airline/';
  }

  create(airline: Airline): Observable<Airline> {
    return this.httpClient.put<Airline>(this.airlineApi, airline);
  }

  save(airline: Airline): Observable<Airline> {
    return this.httpClient.post<Airline>(this.airlineApi, airline);
  }

  getAll(): Observable<Airline[]> {
    return this.httpClient.get<Airline[]>(this.airlineApi);
  }

  getOne(id: number): Observable<Airline> {
    return this.httpClient.get<Airline>(this.airlineApi + id);
  }

  getAdministrated(): Observable<Airline> {
    return this.httpClient.get<Airline>(this.airlineApi + 'administrated');
  }

  getFlight(id: number): Observable<Flight> {
    return this.httpClient.get<Flight>(this.airlineApi + 'flight/' + id);
  }

  getFlightsOfAirline(id: number): Observable<Flight[]> {
    return this.httpClient.get<Flight[]>(this.airlineApi + id + '/flights');
  }

  saveFlight(id: number, flight: Flight): Observable<Flight> {
    flight.airline = null;
    return this.httpClient.post<Flight>(this.airlineApi + id + '/flight', flight);
  }


}

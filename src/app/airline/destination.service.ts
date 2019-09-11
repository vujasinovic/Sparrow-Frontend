import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Destination} from '../models-airline/destination';
import {Globals} from '../globals';

@Injectable({providedIn: 'root'})
export class DestinationService {

  constructor(private httpClient: HttpClient, private globals: Globals) {

  }

  public getAll(): Observable<Destination[]> {
    return this.httpClient.get<Destination[]>(this.globals.apiRoot + 'api/destination');
  }

}

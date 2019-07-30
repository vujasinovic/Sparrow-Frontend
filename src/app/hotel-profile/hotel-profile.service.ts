import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Hotel} from "../models-hotel/hotel";
import {Observable} from "rxjs";

@Injectable()
export class HotelProfileService {
  private hotelProfileUrl: string;

  constructor (private http: HttpClient) {
    this.hotelProfileUrl = 'http://localhost:8080/api/hotels/';
  }

  public findOne(id: number) : Observable<Hotel> {
    return this.http.get<Hotel>(this.hotelProfileUrl + id);
  }
}

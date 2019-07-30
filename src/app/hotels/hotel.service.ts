import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Hotel} from "../models-hotel/hotel";

@Injectable()
export class HotelService {
  private readonly hotelsUrl: string;
  private readonly hotelsCreateUrl: string;
  private readonly hotelsDeleteUrl: string;

  constructor(private http: HttpClient) {
    this.hotelsUrl = 'http://localhost:8080/api/hotels';
    this.hotelsCreateUrl = 'http://localhost:8080/api/sa/hotels';
    this.hotelsDeleteUrl = 'http://localhost:8080/api/sa/hotels/';
  }

  public findAll(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.hotelsUrl);
  }

  public create(hotel: Hotel): Observable<Hotel> {
    return this.http.post<Hotel>(this.hotelsCreateUrl, hotel);
  }

  public delete(id: number) : Observable<Hotel> {
    return this.http.delete<Hotel>(this.hotelsDeleteUrl + id);
  }

}

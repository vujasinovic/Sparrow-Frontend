import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Hotel} from "../models-hotel/hotel";
import {EditHotel} from "../dto/edit-hotel";

@Injectable()
export class HotelService {
  private readonly hotelsUrl: string;
  private readonly saHotelsUrl: string;

  constructor(private http: HttpClient) {
    this.hotelsUrl = 'http://localhost:8080/api/hotels';
    this.saHotelsUrl= 'http://localhost:8080/api/sa/hotels';
  }

  public findAll(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.hotelsUrl);
  }

  public findOne(id: number): Observable<Hotel> {
    return this.http.get<Hotel>(this.hotelsUrl + '/' + id )
  }

  public create(hotel: Hotel): Observable<Hotel> {
    return this.http.post<Hotel>(this.saHotelsUrl, hotel);
  }

  public delete(id: number) : Observable<Hotel> {
    return this.http.delete<Hotel>(this.saHotelsUrl + id);
  }

  public update(hotel: EditHotel): Observable<Hotel> {
    return this.http.put<Hotel>(this.saHotelsUrl, hotel);
  }

}

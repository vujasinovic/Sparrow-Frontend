import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Hotel} from "../models-hotel/hotel";
import {EditHotel} from "../dto/edit-hotel";
import {Room} from "../models-hotel/room";
import {HotelSearchDto} from "../dto/hotel-search-dto";

@Injectable()
export class HotelService {
  private readonly hotelsUrl: string;
  private readonly saHotelsUrl: string;
  private readonly hotelAdminUrl: string;

  constructor(private http: HttpClient) {
    this.hotelsUrl = 'http://localhost:8080/api/hotels';
    this.saHotelsUrl= 'http://localhost:8080/api/sa/hotels';
    this.hotelAdminUrl= 'http://localhost:8080/api/ha/hotels';
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
    return this.http.put<Hotel>(this.hotelAdminUrl, hotel);
  }

  public updateRoom(room: Room, hotelId: number, roomId: number): Observable<Room> {
    return this.http.put<Room>(this.hotelAdminUrl + '/' + hotelId + '/room/' + roomId, room);
  }

  public search(searchDto: HotelSearchDto): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.hotelsUrl + '/search', {params: this.clone(searchDto)})
  }

  public clone(obj: any): any {
    // tslint:disable-next-line:prefer-const
    let cloneObj = {};
    for (let attribute in obj) {
      if (obj[attribute]) {
        if (typeof obj[attribute] === 'object') {
          cloneObj[attribute] = this.clone(obj[attribute]);
        } else {
          cloneObj[attribute] = obj[attribute];
        }
      }
    }
    return cloneObj;
  }
}

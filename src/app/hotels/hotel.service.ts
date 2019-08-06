import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Hotel} from "../models-hotel/hotel";
import {EditHotel} from "../dto/edit-hotel";
import {Room} from "../models-hotel/room";
import {HotelSearchDto} from "../dto/hotel-search-dto";
import {Globals} from "../globals";

@Injectable()
export class HotelService {
  private readonly hotelsApi: string;
  private readonly systemAdminApi: string;
  private readonly hotelAdminApi: string;

  constructor(private http: HttpClient, private globals: Globals) {
    this.hotelsApi = globals.apiRoot + 'api/hotels';
    this.systemAdminApi = globals.apiRoot + 'api/sa/hotels';
    this.hotelAdminApi = globals.apiRoot + 'api/ha/hotels';
  }

  public findAll(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.hotelsApi);
  }

  public findOne(id: number): Observable<Hotel> {
    return this.http.get<Hotel>(this.hotelsApi + '/' + id )
  }

  public create(hotel: Hotel): Observable<Hotel> {
    return this.http.post<Hotel>(this.systemAdminApi, hotel);
  }

  public delete(id: number) : Observable<Hotel> {
    return this.http.delete<Hotel>(this.systemAdminApi + '/' + id);
  }

  public update(hotel: EditHotel): Observable<Hotel> {
    return this.http.put<Hotel>(this.hotelAdminApi, hotel);
  }

  public updateRoom(room: Room, hotelId: number, roomId: number): Observable<Room> {
    return this.http.put<Room>(this.hotelAdminApi + '/' + hotelId + '/room/' + roomId, room);
  }

  public search(searchDto: HotelSearchDto): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.hotelsApi + '/search', {params: this.clone(searchDto)})
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

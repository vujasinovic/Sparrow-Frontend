import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Hotel} from "../models-hotel/hotel";
import {Observable} from "rxjs";
import {PriceListItem} from "../models-hotel/pricelist-item";
import {HotelServices} from "../models-hotel/hotel-services";
import {Room} from "../models-hotel/room";
import {ExtraService} from "../models-hotel/extra-service";
import {Globals} from "../globals";
import {RoomsSearchDto} from "../dto/rooms-search-dto";

@Injectable()
export class HotelProfileService {
  private readonly hotelsApi: string;
  private readonly adminApi: string;
  private readonly extraServicesApi: string;

  constructor (private http: HttpClient, private globals: Globals) {
    this.hotelsApi = globals.apiRoot + 'api/hotels/';
    this.adminApi = globals.apiRoot + 'api/ha/hotels/';
    this.extraServicesApi = globals.apiRoot + 'api/extra-services';
  }

  public findOne(id: number) : Observable<Hotel> {
    return this.http.get<Hotel>(this.hotelsApi + id);
  }

  public findRoom(id: number): Observable<Room> {
    return this.http.get<Room>(this.hotelsApi + 'room/' + id);
  }

  public findPriceListItems(id: number): Observable<PriceListItem[]> {
    return this.http.get<PriceListItem[]>(this.hotelsApi+ id + '/pricelist');
  }

  public findHotelServices(id: number): Observable<HotelServices[]> {
    return this.http.get<HotelServices[]>(this.hotelsApi + id + '/services');
  }

  public createPriceListItem(priceListItem: PriceListItem, id: number): Observable<PriceListItem> {
    return this.http.post<PriceListItem>(this.adminApi + id + '/pricelistitem', priceListItem);
  }

  public deletePriceListItem(priceListItemId: number): Observable<PriceListItem> {
    return this.http.delete<PriceListItem>(this.adminApi + 'pricelistitem/' + priceListItemId);
  }

  public findExtraServices(): Observable<ExtraService[]> {
    return this.http.get<ExtraService[]>(this.extraServicesApi);
  }

  public addHotelService(hotelService: HotelServices, id: number): Observable<HotelServices> {
    return this.http.post<HotelServices>(this.extraServicesApi + '/' + id, hotelService);
  }

  public deleteHotelService(hotelServiceId: number, hotelId: number) : Observable<Hotel> {
    return this.http.delete<Hotel>(this.extraServicesApi + '/' + hotelServiceId + /hotel/ + hotelId);
  }

  public searchRooms(roomsSearchDto: RoomsSearchDto, hotelId: number): Observable<PriceListItem[]> {
    return this.http.get<PriceListItem[]>(this.hotelsApi + hotelId + '/rooms/search', {params: this.clone(roomsSearchDto)} );
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

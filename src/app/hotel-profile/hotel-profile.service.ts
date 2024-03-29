import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Hotel} from "../models-hotel/hotel";
import {Observable} from "rxjs";
import {PriceListItem} from "../models-hotel/pricelist-item";
import {HotelServices} from "../models-hotel/hotel-services";
import {Room} from "../models-hotel/room";
import {ExtraService} from "../models-hotel/extra-service";
import {Globals} from "../globals";
import {RoomsSearchDto} from "../dto/rooms-search-dto";
import {HotelRoomDiscount} from "../models-hotel/hotelRoomDiscount";

@Injectable()
export class HotelProfileService {
  private readonly hotelsApi: string;
  private readonly adminApi: string;
  private readonly extraServicesApi: string;

  constructor(private http: HttpClient, private globals: Globals) {
    this.hotelsApi = globals.apiRoot + 'api/hotels/';
    this.adminApi = globals.apiRoot + 'api/ha/hotels/';
    this.extraServicesApi = globals.apiRoot + 'api/extra-services';
  }

  public findOne(id: number): Observable<Hotel> {
    return this.http.get<Hotel>(this.hotelsApi + id);
  }

  public findRoom(id: number): Observable<Room> {
    return this.http.get<Room>(this.hotelsApi + 'room/' + id);
  }

  public findPriceListItems(id: number): Observable<PriceListItem[]> {
    return this.http.get<PriceListItem[]>(this.hotelsApi + id + '/pricelist');
  }

  public findPriceListItemsByDate(id: number, tripStart: Date, tripEnd: Date): Observable<PriceListItem[]> {
    return this.http.get<PriceListItem[]>(this.hotelsApi + id + '/pricelist/dates', {
      params: new HttpParams({
        fromObject: {
          tripStart: String(tripStart),
          tripEnd: String(tripEnd)
        }
      })
    });
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

  public deleteHotelService(hotelServiceId: number, hotelId: number): Observable<Hotel> {
    return this.http.delete<Hotel>(this.extraServicesApi + '/' + hotelServiceId + /hotel/ + hotelId);
  }

  public searchRooms(roomsSearchDto: RoomsSearchDto, hotelId: number): Observable<PriceListItem[]> {
    return this.http.get<PriceListItem[]>(this.hotelsApi + hotelId + '/rooms/search', {params: this.clone(roomsSearchDto)});
  }

  public createDiscount(hotelRoomDiscount: HotelRoomDiscount): Observable<HotelRoomDiscount> {
    return this.http.post<HotelRoomDiscount>(this.adminApi + 'discount', hotelRoomDiscount);
  }

  public findDiscounts(hotelId: number, tripStart: Date, tripEnd: Date): Observable<HotelRoomDiscount[]> {
    return this.http.get<HotelRoomDiscount[]>(this.adminApi + hotelId + '/discount', {
      params: new HttpParams({
        fromObject: {
          tripStart: String(tripStart),
          tripEnd: String(tripEnd)
        }
      })
    });
  }

  public findAllDiscounts(hotelId: number): Observable<HotelRoomDiscount[]> {
    return this.http.get<HotelRoomDiscount[]>(this.adminApi + hotelId + '/allDiscounts');
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

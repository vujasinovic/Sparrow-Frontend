import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Hotel} from "../models-hotel/hotel";
import {Observable} from "rxjs";
import {PriceListItem} from "../models-hotel/pricelist-item";
import {HotelServices} from "../models-hotel/hotel-services";
import {Room} from "../models-hotel/room";
import {ExtraService} from "../models-hotel/extra-service";

@Injectable()
export class HotelProfileService {
  private readonly hotelsUrl: string;
  private readonly adminUrl: string;
  private readonly extraServicesUrl: string;

  constructor (private http: HttpClient) {
    this.hotelsUrl = 'http://localhost:8080/api/hotels/';
    this.adminUrl = 'http://localhost:8080/api/ha/hotels/';
    this.extraServicesUrl= 'http://localhost:8080/api/extra-services';
  }

  public findOne(id: number) : Observable<Hotel> {
    return this.http.get<Hotel>(this.hotelsUrl + id);
  }

  public findRoom(id: number): Observable<Room> {
    return this.http.get<Room>(this.hotelsUrl + 'room/' + id);
  }

  public findPriceList(id: number): Observable<PriceListItem[]> {
    return this.http.get<PriceListItem[]>(this.hotelsUrl+ id + '/pricelist');
  }

  public findHotelServices(id: number): Observable<HotelServices[]> {
    return this.http.get<HotelServices[]>(this.hotelsUrl + id + '/services');
  }

  public createPriceListItem(priceListItem: PriceListItem, id: number): Observable<PriceListItem> {
    return this.http.post<PriceListItem>(this.adminUrl + id + '/pricelistitem', priceListItem);
  }

  public deletePriceListItem(priceListItemId: number): Observable<PriceListItem> {
    return this.http.delete<PriceListItem>(this.adminUrl + 'pricelistitem/' + priceListItemId);
  }

  public findExtraServices(): Observable<ExtraService[]> {
    return this.http.get<ExtraService[]>(this.extraServicesUrl);
  }

  public addHotelService(hotelService: HotelServices, id: number): Observable<HotelServices> {
    return this.http.post<HotelServices>(this.extraServicesUrl + '/' + id, hotelService);
  }

  public deleteHotelService(hotelServiceId: number, hotelId: number) : Observable<Hotel> {
    return this.http.delete<Hotel>(this.extraServicesUrl + '/' + hotelServiceId + /hotel/ + hotelId);
  }
}

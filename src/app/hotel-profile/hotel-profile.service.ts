import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Hotel} from "../models-hotel/hotel";
import {Observable} from "rxjs";
import {PriceListItem} from "../models-hotel/pricelist-item";
import {HotelServices} from "../models-hotel/hotel-services";

@Injectable()
export class HotelProfileService {
  private hotelProfileUrl: string;
  private priceListUrl: string;
  private hotelServicesUrl: string;

  constructor (private http: HttpClient) {
    this.hotelProfileUrl = 'http://localhost:8080/api/hotels/';
    this.priceListUrl = 'http://localhost:8080/api/hotels/';
    this.hotelServicesUrl = 'http://localhost:8080/api/hotels/';
  }

  public findOne(id: number) : Observable<Hotel> {
    return this.http.get<Hotel>(this.hotelProfileUrl + id);
  }

  public findPriceList(id: number): Observable<PriceListItem[]> {
    return this.http.get<PriceListItem[]>(this.priceListUrl + id + '/pricelist');
  }

  public findExtraServices(id: number): Observable<HotelServices[]> {
    return this.http.get<HotelServices[]>(this.hotelServicesUrl + id + '/services');
  }
}

import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Hotel} from "../models-hotel/hotel";
import {Observable} from "rxjs";
import {PriceList} from "../models-hotel/pricelist";
import {PriceListItem} from "../models-hotel/pricelist-item";

@Injectable()
export class HotelProfileService {
  private hotelProfileUrl: string;
  private priceListUrl: string;

  constructor (private http: HttpClient) {
    this.hotelProfileUrl = 'http://localhost:8080/api/hotels/';
    this.priceListUrl = 'http://localhost:8080/api/hotels/';
  }

  public findOne(id: number) : Observable<Hotel> {
    return this.http.get<Hotel>(this.hotelProfileUrl + id);
  }

  public findPriceList(id: number): Observable<PriceListItem[]> {
    return this.http.get<PriceListItem[]>(this.priceListUrl + id + '/pricelist');
  }
}

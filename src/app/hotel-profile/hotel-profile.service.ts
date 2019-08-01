import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Hotel} from "../models-hotel/hotel";
import {Observable} from "rxjs";
import {PriceListItem} from "../models-hotel/pricelist-item";
import {HotelServices} from "../models-hotel/hotel-services";

@Injectable()
export class HotelProfileService {
  private readonly hotelsUrl: string;

  constructor (private http: HttpClient) {
    this.hotelsUrl = 'http://localhost:8080/api/hotels/';
  }

  public findOne(id: number) : Observable<Hotel> {
    return this.http.get<Hotel>(this.hotelsUrl + id);
  }

  public findPriceList(id: number): Observable<PriceListItem[]> {
    return this.http.get<PriceListItem[]>(this.hotelsUrl+ id + '/pricelist');
  }

  public findExtraServices(id: number): Observable<HotelServices[]> {
    return this.http.get<HotelServices[]>(this.hotelsUrl + id + '/services');
  }

  public createPriceListItem(priceListItem: PriceListItem, id: number): Observable<PriceListItem> {
    return this.http.post<PriceListItem>(this.hotelsUrl + id + '/pricelistitem', priceListItem);
  }

  public deletePriceListItem(priceListItemId: number): Observable<PriceListItem> {
    return this.http.delete<PriceListItem>(this.hotelsUrl + 'pricelistitem/' + priceListItemId);
  }
}

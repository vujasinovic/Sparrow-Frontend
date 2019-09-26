import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Globals} from "../globals";
import {Observable} from "rxjs";
import {Hotel} from "../models-hotel/hotel";
import {Rentacar} from "../models-rac/rentacar";
import {HotelSearchDto} from "../dto/hotel-search-dto";
import {RentacarSearchDto} from "../dto/rentacar-search-dto";
import {Car} from "../models-rac/car";
import {EditRentacar} from "../dto/edit-rentacar";
import {CarReservationComponent} from "../car-reservation/car-reservation.component";
import {CarReservationModel} from "../models-rac/carReservation";
import {HotelReservation} from "../models-hotel/hotel-reservation";
import {CarReservation} from "../dto/car-reservation";
import {CarSale} from "../models-rac/carSale";


@Injectable()
export class RentacarsService{
  private readonly rentacarsApi: string;
  private readonly systemAdminApi: string;
  private readonly rentacarAdminApi: string;

  constructor(private http: HttpClient, private globals: Globals) {
   this.rentacarsApi = globals.apiRoot + 'api/rentacars';
    this.systemAdminApi = globals.apiRoot + 'api/sa/rentacars';
    this.rentacarAdminApi = globals.apiRoot + 'api/ra/rentacars';
  }

  public findAll(): Observable<Rentacar[]> {
    return this.http.get<Rentacar[]>(this.rentacarsApi);
  }

  public search(searchDto: RentacarSearchDto): Observable<Rentacar[]> {
    return this.http.get<Rentacar[]>(this.rentacarsApi + '/search', {params: this.clone(searchDto)})
  }

  public updateCar(car : Car , rentacarId : number , carId : Number ): Observable<Car>{
    return this.http.put<Car>(this.rentacarAdminApi + '/' + rentacarId + '/car/' + carId , car );

  }

  public createSaleCar(carSale : CarSale , rentacarId : number , carId : number ){
    console.log(carSale.start);
    return this.http.post<CarSale>(this.rentacarAdminApi + '/' + rentacarId + '/' + carId + '/newCarSale', carSale);
  }

  public findRentacar(rentacarId:number):Observable<Rentacar>{
    return this.http.get<Rentacar>(this.rentacarsApi + '/' + rentacarId)
  }

  public updateRentacar(editRentacar : EditRentacar , rentacarId : number): Observable<Rentacar>{
    return this.http.put<Rentacar>(this.rentacarAdminApi + '/' + rentacarId , editRentacar);
  }

  public makeReservation(carReservation : CarReservationModel){

    return this.http.post<CarReservationModel>(this.rentacarsApi +'/reservation' , carReservation);

  }

  public deleteCarReservation(id: number): Observable<CarReservation> {
    return this.http.delete<CarReservation>(this.rentacarsApi + '/reservation/' + id);
  }

  public getCarSales() : Observable<CarSale[]> {
    return this.http.get<CarSale[]>(this.rentacarsApi + '/car-sales');
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

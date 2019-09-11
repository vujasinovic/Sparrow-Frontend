import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Globals} from "../globals";
import {Observable} from "rxjs";
import {Hotel} from "../models-hotel/hotel";
import {Rentacar} from "../models-rac/rentacar";
import {CarSearchDto} from "../dto/car-search-dto";
import {Car} from "../models-rac/car";
import {AddCarDto} from "../dto/add-car-dto";
import {PriceListItem} from "../models-hotel/pricelist-item";

@Injectable()
export class RentacarProfileService{

  private readonly rentacarsApi: string;
  private readonly systemAdminApi : string;
  private readonly rentacarAdminApi:string;

  constructor(private http: HttpClient, private globals: Globals) {
    this.rentacarsApi = globals.apiRoot + 'api/rentacars/';
    this.systemAdminApi = globals.apiRoot + 'api/sa/rentacars/';
    this.rentacarAdminApi = globals.apiRoot + 'api/ra/rentacars/';
  }

  public findOne(id: number) : Observable<Rentacar> {
    return this.http.get<Rentacar>(this.rentacarsApi + id);
  }

  public searchCars(carSearchDto : CarSearchDto , rentacarId : number): Observable<Car[]>{
    return this.http.get<Car[]>(this.rentacarsApi + rentacarId +'/cars/search' , {params: this.clone(carSearchDto)});

  }

  public createCar(addCar : Car , rentaCarId: number ): Observable<Car>{
    return this.http.post<Car>(this.rentacarAdminApi + rentaCarId + '/newCar', addCar);
  }

  public deleteCar(carId : number){
    return this.http.delete<Car>(this.rentacarAdminApi + 'car/' + carId);
  }

  public findCar(carId : number):Observable<Car>{
    return this.http.get<Car>(this.rentacarsApi + 'car/' + carId);


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

import {Injectable} from "@angular/core";
import {Globals} from "../globals";
import {HttpClient} from "@angular/common/http";
import {User} from "../user";
import {AuthService} from "../login/auth.service";
import {HotelReservationDto} from "../dto/hotel-reservation-dto";
import {Observable} from "rxjs";

@Injectable()
export class UserReservationsService {
  private readonly hotelsApi: string;

  user: User;

  constructor(private globals: Globals, private http: HttpClient, private authService: AuthService) {
    this.hotelsApi = globals.apiRoot + 'api/hotels';
    this.user = authService.getLoggedUser();
    console.log("Currently logged: ", this.user);
  }

  public findAllActive(): Observable<HotelReservationDto[]> {
    console.log('User id: ', this.user.id);
    return this.http.get<HotelReservationDto[]>(this.hotelsApi + '/reservations-active/' + this.user.id);
  }

  public findAllFinished(): Observable<HotelReservationDto[]> {
    return this.http.get<HotelReservationDto[]>(this.hotelsApi + '/reservations-finished/' + this.user.id);
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

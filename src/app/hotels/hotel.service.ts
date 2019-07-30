import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Hotel} from "../models-hotel/hotel";

@Injectable()
export class HotelService {
  private readonly hotelsUrl: string;

  constructor(private http: HttpClient) {
    this.hotelsUrl = 'http://localhost:8080/api/hotels';
  }

  public findAll(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.hotelsUrl);
  }

}

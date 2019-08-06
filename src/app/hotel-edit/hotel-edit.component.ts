import {Component, ElementRef, NgZone, OnInit, ViewChild} from "@angular/core";
import {Hotel} from "../models-hotel/hotel";
import {HotelService} from "../hotels/hotel.service";
import {Address} from "../models-hotel/address";
import {ActivatedRoute, Router} from "@angular/router";
import {EditHotel} from "../dto/edit-hotel";
import {MapsAPILoader, MouseEvent as AGMMouseEvent} from "@agm/core";

@Component({
  selector: 'hotel-edit',
  templateUrl: './hotel-edit.component.html'
})
export class HotelEditComponent implements OnInit {
  hotel: Hotel = new Hotel();
  editHotel: EditHotel = new EditHotel();
  urlHotelId: string;

  address: Address = new Address();
  zoom: number;
  private geoCoder;

  @ViewChild('search', {static: false})
  public searchElementRef: ElementRef;

  ngOnInit(): void {
    this.findOne();
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;

      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          this.address.latitude = place.geometry.location.lat();
          this.address.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }

  constructor(private hotelService: HotelService, private router: Router, private activatedRoute: ActivatedRoute, private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {
    this.editHotel.address = new Address();
    this.urlHotelId = this.activatedRoute.snapshot.paramMap.get('id');
    this.editHotel.id = +this.urlHotelId;
  }

  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        // this.address.latitude = position.coords.latitude;
        // this.address.longitude = position.coords.longitude;
        this.zoom = 8;
        // this.getAddress(this.address.latitude, this.address.longitude); //possible shit
      });
    }
  }

  markerDragEnd($event: AGMMouseEvent) {
    console.log($event.coords.lat);
    console.log($event.coords.lng);
    this.address.latitude = $event.coords.lat;
    this.address.longitude = $event.coords.lng;
    this.getAddress(this.address.latitude, this.address.longitude);
  }

  getAddress(latitude, longitude) {
    this.geoCoder.geocode({'location': {lat: latitude, lng: longitude}}, (results, status) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          console.log('ADDRESS', results[0].formatted_address);
          this.address.address = results[0].formatted_address;
          this.editHotel.address.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  }

  public findOne() {
    this.hotelService.findOne(+this.urlHotelId).subscribe(data => {
      this.editHotel.name = data.name;
      this.editHotel.address.address = data.address.address;
      this.editHotel.address.latitude = data.address.latitude;
      this.editHotel.address.longitude = data.address.longitude;
      this.editHotel.description = data.description;
    })
  }

  public update() {
    this.editHotel.address.address = this.address.address;
    this.editHotel.address.longitude = this.address.longitude;
    this.editHotel.address.latitude = this.address.latitude;

    this.hotelService.update(this.editHotel).subscribe(value => {
      this.router.navigateByUrl('hotels/' + this.urlHotelId);
    })
  }
}

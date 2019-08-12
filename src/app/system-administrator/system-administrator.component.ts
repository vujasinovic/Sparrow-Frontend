import {Component, ElementRef, NgZone, OnInit, ViewChild} from "@angular/core";
import {Hotel} from "../models-hotel/hotel";
import {HotelService} from "../hotels/hotel.service";
import {Address} from "../models-hotel/address";
import {ActivatedRoute, Router} from "@angular/router";
import {MapsAPILoader, MouseEvent as AGMMouseEvent} from "@agm/core";

@Component({
  selector: 'system-administrator',
  templateUrl: './system-administrator.component.html'
})
export class SystemAdministratorComponent implements OnInit {
  BASE64_MARKER = ';base64,';

  hotel: Hotel = new Hotel();
  hotels: Hotel[];
  url: string;

  address: Address = new Address();
  zoom: number;
  private geoCoder;
  private imageSrc: string = '';

  @ViewChild('search', {static: false})
  public searchElementRef: ElementRef;

  constructor(private hotelService: HotelService, private router: Router, private activatedRoute: ActivatedRoute, private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {
    this.hotel.address = new Address();
    this.hotel.rooms = [];
    this.url = this.activatedRoute.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    this.findAll();
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

  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.address.latitude = position.coords.latitude;
        this.address.longitude = position.coords.longitude;
        this.zoom = 8;
        this.getAddress(this.address.latitude, this.address.longitude); //possible shit
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
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  }

  public findAll() {
    this.hotelService.findAll().subscribe(data => {
      this.hotels = data;
    })
  }

  public create() {
    this.hotel.address.address = this.address.address;
    this.hotel.address.longitude = this.address.longitude;
    this.hotel.address.latitude = this.address.latitude;
    this.hotelService.create(this.hotel).subscribe(value => {
      this.findAll();
    });
  }

  public delete(id: number) {
    this.hotelService.delete(id).subscribe(value => {
      this.findAll();
    })
  }

  onFileSelect(event) {
    let file = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];
    let pattern = /image-*/;
    let reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('Invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  _handleReaderLoaded(e) {
    let reader = e.target;
    this.imageSrc = reader.result;
    this.hotel.image = this.imageSrc;
    console.log(this.imageSrc);
  }

}

import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {Address} from "../models-hotel/address";
import {Rentacar} from "../models-rac/rentacar";
import {MapsAPILoader, MouseEvent as AGMMouseEvent} from "@agm/core";

import {ActivatedRoute, Router} from "@angular/router";
import {RentacarsService} from "../rentacars/rentacars.service";
import {EditRentacar} from "../dto/edit-rentacar";

@Component({
  selector: 'app-rentacar-edit',
  templateUrl: './rentacar-edit.component.html'
})
export class RentacarEditComponent implements OnInit {

  rentaCar : Rentacar = new Rentacar();
  rentacarId: string;
  editRentacar : EditRentacar = new EditRentacar();

  address: Address = new Address();
  zoom: number;
  private geoCoder;

  @ViewChild('search', {static: false})
  public searchElementRef: ElementRef;

  constructor(private rentacarsService: RentacarsService, private router: Router, private activatedRoute: ActivatedRoute, private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {
    this.rentacarId = this.activatedRoute.snapshot.paramMap.get('id');
    this.editRentacar.address = new Address();
    this.editRentacar.id = +this.rentacarId
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

  ngOnInit() {
    this.findRentacar();
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
          this.editRentacar.address.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  }

  public findRentacar() {
    this.rentacarsService.findRentacar(+this.rentacarId).subscribe(data => {
      this.editRentacar.name = data.name;
      this.editRentacar.address.address = data.address.address;
      this.editRentacar.address.latitude = data.address.latitude;
      this.editRentacar.address.longitude = data.address.longitude;
      this.editRentacar.description = data.description;
    })
  }

  public updateRentacar(){
    this.editRentacar.address.address = this.address.address;
    this.editRentacar.address.longitude = this.address.longitude;
    this.editRentacar.address.latitude = this.address.latitude

    this.rentacarsService.updateRentacar(this.editRentacar , this.editRentacar.id).subscribe(data =>{
      this.router.navigateByUrl('rentacars/' + this.rentacarId);
    })
  }

}

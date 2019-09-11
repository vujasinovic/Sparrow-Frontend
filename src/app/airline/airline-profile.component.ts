import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {AirlineService} from './airline.service';
import {Airline} from '../models-airline/airline';
import {ActivatedRoute} from '@angular/router';
import {MapsAPILoader, MouseEvent as AGMMouseEvent} from '@agm/core';
import {DestinationService} from './destination.service';
import {Destination} from '../models-airline/destination';

@Component({
  templateUrl: 'airline-profile.html',
  selector: 'app-airline-profile'
})
export class AirlineProfileComponent implements OnInit {
  airline: Airline;
  edit = false;
  private geoCoder;
  zoom: number;
  @ViewChild('search', {static: false})
  public searchElementRef: ElementRef;
  id: number;
  destinations: Destination[] = [];
  selectedDsts: boolean[] = [];

  constructor(private airlineService: AirlineService, private route: ActivatedRoute, private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone, private destinationService: DestinationService) {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    });


  }

  ngOnInit(): void {
    this.mapsAPILoader.load().then(() => {
      if (this.id) {
        this.airlineService.getOne(this.id).subscribe(value => {
          this.airline = value;
          this.airline.destinations.forEach(dst => {
            this.selectedDsts[dst.id] = true;
          });

          this.setCurrentLocation(this.airline.address);
          this.destinationService.getAll().subscribe(dsts => {
            this.destinations = dsts;
          });

        });
      } else {
        this.airlineService.getAdministrated().subscribe(value => {
          this.airline = value;
          this.airline.destinations.forEach(dst => {
            this.selectedDsts[dst.id] = true;
          });

          this.setCurrentLocation(this.airline.address);
          this.destinationService.getAll().subscribe(dsts => {
            this.destinations = dsts;
          });

        });
      }

      this.geoCoder = new google.maps.Geocoder();

      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['address']
      });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          this.zoom = 12;
        });
      });
    });

  }

  private setCurrentLocation(address) {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.zoom = 8;
        this.getAddress(address.latitude, address.longitude); // possible shit
      });
    }
  }


  markerDragEnd($event: AGMMouseEvent, address) {
    console.log($event.coords.lat);
    console.log($event.coords.lng);
    address.latitude = $event.coords.lat;
    address.longitude = $event.coords.lng;
    this.getAddress(address.latitude, address.longitude);
  }

  getAddress(latitude, longitude) {
    this.geoCoder.geocode({location: {lat: latitude, lng: longitude}}, (results, status) => {
      console.log(results);
      console.log(status);
      if (results[0]) {
        this.zoom = 12;
        console.log('ADDRESS', results[0].formatted_address);
        this.airline.address.address = results[0].formatted_address;
      } else {
        window.alert('No results found');
      }

    });
  }

  dstClicked(dst: Destination) {
    const selected = this.selectedDsts[dst.id];
    this.selectedDsts[dst.id] = !selected;
  }

  save() {
    this.airline.destinations = [];

    for (const id in this.selectedDsts) {
      if (this.selectedDsts[id]) {
        this.airline.destinations.push(new Destination(id, '', ''));
      }
    }

    this.airlineService.save(this.airline).subscribe(
    );
  }

}

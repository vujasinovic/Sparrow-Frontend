import {Component} from '@angular/core';
import {Flight} from '../models-airline/flight';
import {AirlineService} from './airline.service';
import {Destination} from '../models-airline/destination';
import {DestinationService} from './destination.service';
import {ActivatedRoute} from '@angular/router';
import {Segment} from '../models-airline/segment';
import {Seat} from '../models-airline/seat';
import {Airline} from '../models-airline/airline';

@Component({
  selector: 'app-flight-editor',
  templateUrl: 'flight-editor.component.html'
})
export class FlightEditorComponent {
  flight: Flight;
  selectedDsts: boolean[] = [];

  segCol = 1;
  segRow = 1;
  segName = '';

  airline: Airline;

  constructor(private airlineService: AirlineService, private destinationService: DestinationService,
              private activatedRoute: ActivatedRoute) {

    const fid = Number(activatedRoute.snapshot.paramMap.get('fid'));

    airlineService.getAdministrated().subscribe(a => {
      this.airline = a;
    });

    if (fid) {
      airlineService.getFlight(fid).subscribe(f => {
        this.flight = f;

        f.changeovers.forEach(co => {
          this.selectedDsts[co.id] = true;
        });
      });
    } else {
      this.flight = new Flight();
    }
  }

  dstClicked(destinatin: Destination) {
    this.selectedDsts[destinatin.id] = !this.selectedDsts[destinatin.id];

    const dsts = [];
    for (const id in this.selectedDsts) {
      if (this.selectedDsts[id]) {
        dsts.push(new Destination(id, '', ''));
      }
    }


    this.flight.changeovers = dsts;
  }

  addSegment() {
    if (!this.segName) {
      return;
    }

    const seg = new Segment();
    seg.name = this.segName;
    seg.cols = this.segCol;
    seg.rows = this.segRow;

    for (let i = 0; i < seg.rows * seg.cols; i++) {
      const s = new Seat();
      const mock = new Segment();
      mock.id = seg.id;
      s.segment = mock;

      seg.seats.push(s);
    }

    this.segName = '';
    this.segCol = 1;
    this.segRow = 1;

    this.flight.segments.push(seg);
  }

  range(n) {
    const arr = [];

    for (let i = 0; i < n; i++) {
      arr.push(i);
    }

    return arr;
  }

  removeSegment(segment: Segment) {
    this.flight.segments.splice(this.flight.segments.indexOf(segment), 1);
  }

  save() {
    this.airlineService.saveFlight(this.airline.id, this.flight).subscribe(value => {
      this.flight = value;
    });
  }
}

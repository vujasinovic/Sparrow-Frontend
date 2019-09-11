import {Airline} from './airline';
import {Destination} from './destination';
import {Segment} from './segment';
import {Time} from '@angular/common';

export class Flight {
  constructor(
    public id: number = null,
    public airline: Airline = null,
    public from: Destination = null,
    public to: Destination = null,
    public departureDate: Date = null,
    public arrivalDate: Date = null,
    public departureTime: Time = null,
    public arrivalTime: Time = null,
    public changeovers: Destination[] = [],
    public duration: number = 1,
    public segments: Segment[] = [],
    public discount: number = 0,
    public luggage: boolean = false
  ) {
  }
}

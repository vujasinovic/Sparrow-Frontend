import {Seat} from './seat';
import {Flight} from './flight';

export class Segment {
  constructor(
    public id: number = null,
    public rows: number = 0,
    public cols: number = 0,
    public name: string = null,
    public seats: Seat[] = [],
    public flight: Flight = null
  ) {

  }
}

import {
  concat,
  concatMap,
  delay,
  EMPTY,
  empty,
  fromEvent,
  interval,
  merge,
  pipe,
  startWith,
  Subscription,
  timer,
} from 'rxjs';
import { ApiService } from './../service/api.service';
import { Component, OnInit } from '@angular/core';
import {
  filter,
  map,
  mapTo,
  scan,
  take,
  takeUntil,
  takeWhile,
  tap,
  throttleTime,
} from 'rxjs/operators';

@Component({
  selector: 'app-seven-section',
  templateUrl: './seven-section.component.html',
  styleUrls: ['./seven-section.component.scss'],
})
export class SevenSectionComponent {
  time: any;
  private counterSubs = new Subscription();

  ngOnInit() {}

  /* this is counter -> bug:
                            1. it works but click more than one click it works more than one
                            2. we should use merge part4 of 7th section

  startClick() {
    // if (this.counterSubs && !this.counterSubs.closed) {
    //   return;
    // }

    const counter$ = interval(500).pipe(
      mapTo(-1),
      scan((acc, curr) => {
        return acc + curr;
      }, 10),
      startWith(10),
      takeWhile((val) => val >= 0),
      tap((val) => (this.time = val)),

      tap((val) => console.log(val))
    );

    this.counterSubs = counter$.subscribe();
  }
  pauseClick() {
    this.counterSubs.unsubscribe();
  }
  */
}

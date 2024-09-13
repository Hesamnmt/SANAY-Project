import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from './../service/api.service';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import {
  catchError,
  concatMap,
  debounceTime,
  empty,
  exhaustMap,
  finalize,
  fromEvent,
  interval,
  map,
  mergeMap,
  pipe,
  reduce,
  scan,
  Subscription,
  switchMap,
  take,
  takeUntil,
  tap,
  throttleTime,
  timer,
} from 'rxjs';

@Component({
  selector: 'app-six-section',
  templateUrl: './six-section.component.html',
  styleUrls: ['./six-section.component.scss'],
})
export class SixSectionComponent {
  myForm!: FormGroup;
  @ViewChild('searchInput', { static: true }) searchInput!: ElementRef;

  constructor(private apiService: ApiService, private fb: FormBuilder) {
    // this.myForm = fb.group({
    //   input: [''],
    // });
  }

  //----------- find previenc and city ----------

  ngAfterViewInit() {
    // this.myForm
    //   .get('input')
    //   ?.valueChanges.pipe(
    //     debounceTime(500),
    //     tap((val) => console.log(val)),
    //     switchMap((val) => this.apiService.getGithubUser(val)),
    //     catchError((err, caugth) => {
    //       console.error({
    //         error: err.message,
    //       });
    //       // return empty();
    //       return caugth;
    //     })
    //   )
    //   .subscribe();
    //----------- find previenc and city with switchMap ----------
    // fromEvent(this.searchInput.nativeElement, 'input')
    //   .pipe(
    //     debounceTime(500),
    //     map((event: any) => event.target.value),
    //     tap((value: string) => console.log('Final input:', value)),
    //     switchMap((val) => this.apiService.getGithubUser(val))
    //   )
    //   .subscribe();
  }

  //----------------------------------
  // fromEvent(document, 'mousedown')
  //   .pipe(
  //     tap((val) => console.log('tap:', val)),
  //     mergeMap(() =>
  //       interval(10).pipe(takeUntil(fromEvent(document, 'mouseup')))
  //     )
  //   )
  //   .subscribe(console.log);

  // ----------------------------

  // ngOnInit() {
  // this.myForm
  //   .get('input')
  //   ?.valueChanges.pipe(debounceTime(500))
  //   .subscribe((res: any) => {
  //     return;
  //   });
  // fromEvent(document, 'mousedown')
  //   .pipe(switchMap(() => interval(1000)))
  //   .subscribe(console.log);
  // fromEvent(document, 'click')
  //   .pipe(exhaustMap(() => interval(1000).pipe(take(3))))
  //   .subscribe(console.log);
  // }

  // ------------------------ loading image -----------------------

  status = 'stopped';
  imageUrl: string | null = null;
  private interval$ = new Subscription();

  onStart(): void {
    const randomImageFetcher$ = interval(1000).pipe(
      tap(() => {
        this.status = 'active';
        this.fetchRandomImage();
      }),
      finalize(() => (this.status = 'stopped'))
    );
    this.interval$ = randomImageFetcher$.subscribe();
  }

  onStop(): void {
    this.status = 'stopped';
    this.interval$.unsubscribe();
  }

  fetchRandomImage(): void {
    const randomImageUrl = 'https://random.dog/woof.json';
    fetch(randomImageUrl)
      .then((response) => response.json())
      .then((data) => {
        this.imageUrl = data.url;
      });
  }
}

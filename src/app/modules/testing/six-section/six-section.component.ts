import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from './../service/api.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  debounceTime,
  fromEvent,
  interval,
  map,
  mergeMap,
  pipe,
  reduce,
  scan,
  switchMap,
  takeUntil,
  tap,
  throttleTime,
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
    this.myForm = fb.group({
      input: [''],
    });
  }

  //----------- find previenc and city ----------

  ngAfterViewInit() {
    // fromEvent(this.searchInput.nativeElement, 'input')
    //   .pipe(
    //     debounceTime(500),
    //     map((event: any) => event.target.value),
    //     tap((value: string) => console.log('Final input:', value))
    //   )
    //   .subscribe((res) => {
    //     this.apiService.getGithubUser(res).subscribe();
    //   });

    //----------- find previenc and city with switchMap ----------

    fromEvent(this.searchInput.nativeElement, 'input')
      .pipe(
        debounceTime(500),
        map((event: any) => event.target.value),
        tap((value: string) => console.log('Final input:', value)),
        switchMap((val) => this.apiService.getGithubUser(val))
      )
      .subscribe();
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

  ngOnInit() {
    this.myForm
      .get('input')
      ?.valueChanges.pipe(debounceTime(500))
      .subscribe((res: any) => {
        return;
      });

    fromEvent(document, 'mousedown')
      .pipe(switchMap(() => interval(1000)))
      .subscribe(console.log);
  }
}

import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from './../service/api.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  debounceTime,
  fromEvent,
  map,
  pipe,
  reduce,
  scan,
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

  ngOnInit() {
    this.myForm
      .get('input')
      ?.valueChanges.pipe(debounceTime(500))
      .subscribe((res: any) => {
        this.apiService
          .getGithubUser(res)
          .pipe(map((val: any) => val.login))
          .subscribe(console.log);
      });
  }

  //----------- moadian find previenc and city ----------
  ngAfterViewInit() {
    fromEvent(this.searchInput.nativeElement, 'input')
      .pipe(
        debounceTime(500),
        map((event: any) => event.target.value),
        tap((value: string) => console.log('Final input:', value))
      )
      .subscribe((res) => {
        this.apiService.getGithubUser(res).subscribe();
      });
  }
}

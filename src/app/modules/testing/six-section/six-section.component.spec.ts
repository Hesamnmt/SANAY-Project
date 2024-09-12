import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixSectionComponent } from './six-section.component';

describe('SixSectionComponent', () => {
  let component: SixSectionComponent;
  let fixture: ComponentFixture<SixSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SixSectionComponent]
    });
    fixture = TestBed.createComponent(SixSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

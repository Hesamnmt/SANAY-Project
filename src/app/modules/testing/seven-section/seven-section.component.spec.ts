import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SevenSectionComponent } from './seven-section.component';

describe('SevenSectionComponent', () => {
  let component: SevenSectionComponent;
  let fixture: ComponentFixture<SevenSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SevenSectionComponent]
    });
    fixture = TestBed.createComponent(SevenSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

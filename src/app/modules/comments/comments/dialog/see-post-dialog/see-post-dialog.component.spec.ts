import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeePostDialogComponent } from './see-post-dialog.component';

describe('SeePostDialogComponent', () => {
  let component: SeePostDialogComponent;
  let fixture: ComponentFixture<SeePostDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeePostDialogComponent]
    });
    fixture = TestBed.createComponent(SeePostDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

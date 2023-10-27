import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMobileComponent } from './display-mobile.component';

describe('DisplayMobileComponent', () => {
  let component: DisplayMobileComponent;
  let fixture: ComponentFixture<DisplayMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayMobileComponent]
    });
    fixture = TestBed.createComponent(DisplayMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

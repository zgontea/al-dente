import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentCallendarComponent } from './appointment-callendar.component';

describe('AppointmentCallendarComponent', () => {
  let component: AppointmentCallendarComponent;
  let fixture: ComponentFixture<AppointmentCallendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentCallendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentCallendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

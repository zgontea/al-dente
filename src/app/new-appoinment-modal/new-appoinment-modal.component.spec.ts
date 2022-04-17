import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAppoinmentModalComponent } from './new-appoinment-modal.component';

describe('NewAppoinmentModalComponent', () => {
  let component: NewAppoinmentModalComponent;
  let fixture: ComponentFixture<NewAppoinmentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAppoinmentModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAppoinmentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

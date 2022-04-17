import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewAppoinmentModalComponent } from '../new-appoinment-modal/new-appoinment-modal.component';

@Component({
  selector: 'app-appointment-callendar',
  templateUrl: './appointment-callendar.component.html',
  styleUrls: ['./appointment-callendar.component.css']
})
export class AppointmentCallendarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(NewAppoinmentModalComponent);
  }

}

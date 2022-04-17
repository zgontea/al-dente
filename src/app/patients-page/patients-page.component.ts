import { Component, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { NewAppoinmentModalComponent } from '../new-appoinment-modal/new-appoinment-modal.component';

export interface PeriodicElement {
  name: string;
  city: string;
  zip_code: string;
  gender: string;
  age: number;
  telephone: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Fran Kar', city: 'Łódź', zip_code: '12-345', gender: 'm', age: 21, telephone: 123456789},
  {name: 'Tom Sztajka', city: 'Rzgów', zip_code: '22-345', gender: 'm', age: 22, telephone: 123456789},
  {name: 'Jan Gontar', city: 'Green Mountain', zip_code: '32-345', gender: 'm', age: 22, telephone: 123456789},
  {name: 'Francisław z Bogdańca', city: 'Bogdaniec', zip_code: '42-345', gender: 'm', age: 23, telephone: 123456789},
  {name: 'Tomasz Sztajkaszek', city: 'Kraków', zip_code: '52-345', gender: 'm', age: 24, telephone: 123456789},
  {name: 'Janicja Gotaricja', city: 'Wrocław', zip_code: '62-345', gender: 'w', age: 25, telephone: 123456789},
  {name: 'Francich Karwa', city: 'Warszawka', zip_code: '72-345', gender: 'm', age: 26, telephone: 123456789},
  {name: 'Jancich Gonta', city: 'Zgierz', zip_code: '82-345', gender: 'm', age: 27, telephone: 123456789},
]

@Component({
  selector: 'app-patients-page',
  templateUrl: './patients-page.component.html',
  styleUrls: ['./patients-page.component.css']
})
export class PatientsPageComponent implements OnInit {

  displayedColumns: string[] = ['name', 'gender', 'age', 'city', 'zip_code', 'telephone'];
  dataSource = ELEMENT_DATA;

  imageSrc = '../assets/logo.png';

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(NewAppoinmentModalComponent);
  }

}

import { Component, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  time: string;
  name: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {time: '8:00 - 8:45', name: 'Fran Kar', status: 'In Progress'},
  {time: '9:00 - 9:45', name: 'Tom Sztajka', status: 'Planned'},
  {time: '10:00 - 10:45', name: 'Jan Gontar', status: 'Planned'},
  {time: '11:00 - 11:45', name: 'Francisław z Bogdańca', status: 'Declined'},
  {time: '12:00 - 12:45', name: 'Tomaszek Sztajkaszek', status: 'Planned'},
  {time: '13:00 - 13:45', name: 'Janicja Gontaricja', status: 'Planned'},
  {time: '14:00 - 14:45', name: 'Francich Karwa', status: 'Declined'},
  {time: '15:00 - 15:45', name: 'Jancich Gonta', status: 'Planned'}
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['time', 'name', 'status', 'actions'];
  dataSource = ELEMENT_DATA;

  imageSrc = '../assets/logo.png';

  selected: Date | null | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}

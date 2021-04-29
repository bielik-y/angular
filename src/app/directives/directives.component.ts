import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  flights: Array<any>;
  constructor() {
    this.flights = [{number: '125', company: 'SkyUP', departure: '16:26', arrival: '17:40'},
            {number: '120', company: 'May', departure: '18:02', arrival: '20:05'},
            {number: '122', company: 'BeesAirlines', departure: '18:20', arrival: '21:36'},
            {number: '126', company: 'SkyUP', departure: '19:26', arrival: '21:03'},
            {number: '118', company: 'UBE', departure: '00:21', arrival: '03:58'}];
  }
  flag = false;
  button = 'Показать текст';
  toggle(): void {
    this.flag = !this.flag;
    if (!this.flag) {
      this.button = 'Показать текст';
    }
    else {
      this.button = 'Скрыть текст';
    }
  }

  ngOnInit(): void {
  }

}

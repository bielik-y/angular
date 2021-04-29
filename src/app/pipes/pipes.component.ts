import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  myDate = new Date();
  pi = 3.1415926535;
  text = 'abc def ghi';
  number = 0.02;
  phoneNumber1 = '0503984425';
  phoneNumber2 = '380 50 318 15 05';
  phoneNumber3 = '85858';
  constructor() { }

  ngOnInit(): void {
  }

}

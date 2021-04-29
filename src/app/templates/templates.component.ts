import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit {

  name = 'Дочерний компонет';
  weekend = true;
  array = [{name: 'Английский язык'},
          {name: 'ООП'},
          {name: 'Операционные системы'},
          {name: 'Теория вероятности'},
          {name: 'Веб-технологии'}];

  buttonText = 'Отменить выходной';

  counter = 0;

  today: Date = new Date();
  changeDay(): void{
    this.weekend = !this.weekend;
    if (this.weekend){
      this.buttonText = 'Организовать себе выходной';
    }
    else {
      this.buttonText = 'Отменить выходной';
    }
  }

  increment(): void {
    this.counter++;
  }
  decrement(): void {
    this.counter--;
  }
  constructor() { }

  ngOnInit(): void {
  }

  writeText(): string {
    return 'Я дочерний элемент! И функция, которая возвращает этот текст находится в дочернем компоненте.';
  }
}

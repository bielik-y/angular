import { Component, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { TemplatesComponent } from './templates/templates.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild(TemplatesComponent) child!: TemplatesComponent;

  title = 'lab2';
  name = 'Родительский компонет';

  ngAfterViewInit(): void {
    console.log(this.child.writeText());
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  parentText: string;
  title = 'App';

  constructor() {
    this.parentText = 'Тееееееекст';
  }

  greet(): void {
    alert('Приветствую!!! (от метода в компоненте App)');
  }
}

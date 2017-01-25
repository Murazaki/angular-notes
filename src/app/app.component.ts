import { Component } from '@angular/core';

@Component({
  selector: 'iim-web-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  title;
  count;

  constructor() {
    this.title = 'Hello World !';
    this.count = 2;
  }

  getTitle() {
    return this.title;
  }
}

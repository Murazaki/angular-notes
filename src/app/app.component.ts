import { Component } from '@angular/core';

import { TestService } from './test.service';

@Component({
  selector: 'iim-web-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  title;
  count;

  constructor(private t: TestService) {
    this.title = 'Hello World !';
    this.count = 2;
  }

  getTitle() {
    return this.title;
  }
}

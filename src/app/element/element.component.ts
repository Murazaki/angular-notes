import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'iim-web-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {
  @Input() value;

  constructor() { }

  ngOnInit() {
  }

}

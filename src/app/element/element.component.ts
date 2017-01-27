import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'iim-web-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit, OnDestroy {
  id;
  private sub: any;

  constructor(private route: ActivatedRoute) { }
   
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }
   
  ngOnDestroy() {
    
  }

}

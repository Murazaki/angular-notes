import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { TestService } from './test.service';

import { AppComponent } from './app.component';
import { ElementComponent } from './element/element.component';
import { TableauComponent } from './tableau/tableau.component';

@NgModule({
  declarations: [
    AppComponent,
    ElementComponent,
    TableauComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: TableauComponent
      },
      {
        path: 'element',
        component: ElementComponent
      },
      {
        path: 'element/:id', // id est un paramètre
        component: ElementComponent
      }
    ])
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }

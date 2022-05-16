import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalnderComponent } from './calnder/calnder.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { DemoComponent } from './demo/demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoUtilsComponent } from './demo-utils/demo-utils.component';
import { FlatpickrModule } from 'angularx-flatpickr';

@NgModule({
  declarations: [
    AppComponent,
    CalnderComponent,
    DemoComponent,
    DemoUtilsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    NgbModalModule,
    BrowserAnimationsModule ,

    ReactiveFormsModule ,
    FormsModule ,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

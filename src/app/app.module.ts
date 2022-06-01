import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputNumberComponent } from './components/input-number/input-number.component';
import { MaxMinMeterComponent } from './components/max-min-meter/max-min-meter.component';

@NgModule({
  declarations: [
    AppComponent,
    InputNumberComponent,
    MaxMinMeterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputNumberComponent } from './components/input-number/input-number.component';
import { MaxMinMeterComponent } from './components/max-min-meter/max-min-meter.component';
import { BooksComponent } from './components/books/books.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { InputTextModule } from 'primeng/inputtext';
import { SearchComponent } from './components/shopping/search/search.component';
@NgModule({
  declarations: [
    AppComponent,
    InputNumberComponent,
    MaxMinMeterComponent,
    BooksComponent,
    ShoppingComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TableModule,
    InputTextModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

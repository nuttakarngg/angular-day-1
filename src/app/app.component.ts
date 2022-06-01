import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showMaxMinMeter:boolean = true;
  showInputNumber:boolean = true;

  LoggingNumber(value:number){
    console.log(`Number on change value is ${value}`)
  }
}

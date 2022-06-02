import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showMaxMinMeter: boolean = true;
  showInputNumber: boolean = true;

  users: string[] = ['Nuttakarn', 'Chaiyapol', 'Wissarut'];

  LoggingNumber(value: number) {
    console.log(`Number on change value is ${value}`);
  }

  addUser() {
    this.users.push(`User (${this.users.length})`);
  }

  popUser() {
    this.users.pop();
  }

  removeUser(index: number) {
    this.users.splice(index, 1);
  }
}

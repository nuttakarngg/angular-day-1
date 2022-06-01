import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss'],
})
export class InputNumberComponent implements OnInit {
  @Input()
  counter: number = 0;
  @Input()
  step: number = 1;
  @Output()
  counterChange = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  decrease() {
    if (this.counter - this.step > 0) {
      this.counter -= this.step;
      this.counterChange.emit(this.counter);
    }
  }

  increase() {
    if (this.counter + this.step <= 100) {
      this.counter += this.step;
      this.counterChange.emit(this.counter);
    }
  }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-max-min-meter',
  templateUrl: './max-min-meter.component.html',
  styleUrls: ['./max-min-meter.component.scss'],
})
export class MaxMinMeterComponent implements OnInit {
  @Input() minLabel: string = 'minLabel';
  @Input() maxLabel: string = 'maxLabel';
  squareWidth: number = 10;
  squareHeight: number = 20;
  constructor() {}

  ngOnInit(): void {}
}

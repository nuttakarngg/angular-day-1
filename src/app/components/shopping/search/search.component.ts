import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() onInput = new EventEmitter<string>();
  @Output() onSearch = this.onInput.pipe(debounceTime(400));
  constructor() {}

  ngOnInit(): void {}

  search(keyword: string) {
    this.onInput.emit(keyword);
  }
}

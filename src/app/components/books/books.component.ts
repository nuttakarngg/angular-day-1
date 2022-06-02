import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  constructor(private bookService: BookService) {}
  bookList: Book[] = [];
  ngOnInit(): void {}
  searchBook(name: string) {
    this.bookService.fetchBook(name).subscribe((books) => {
      this.bookList = books;
    });
  }
}

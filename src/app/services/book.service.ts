import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  fetchBook(name:string){
    return this.http
    .get<Book[]>(`https://anapioficeandfire.com/api/books?name=${name}`)

  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root',
})
export class BookstoreService {
  private baseURL = 'http://localhost:8080/bookStore';
  constructor(private _http: HttpClient) {}

  getBooksFromServer(): Observable<any> {
    return this._http.get<any>(this.baseURL);
  }

  getOldestAndLatest(): Observable<any> {
    return this._http.get<any>(`${this.baseURL}/getOldestAndLatestBook`);
  }

  postBookToServer(book: Book): Observable<Book> {
    return this._http.post<Book>(
      'http://localhost:8080/bookStore/addBook',
      book
    );
  }

  public deleteBook(bookId: number): Observable<void> {
    return this._http.delete<void>(`${this.baseURL}/${bookId}`);
  }
}

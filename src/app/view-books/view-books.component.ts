import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { BookstoreService } from '../bookstore.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Book } from '../book';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css'],
})
export class ViewBooksComponent implements OnInit {
  constructor(private _service: BookstoreService, private _route: Router) {}

  books: any[] = [];

  ngOnInit(): void {
    this.getAllBooks();
  }

  public getAllBooks(): void {
    this._service.getBooksFromServer().subscribe(
      (response: Book[]) => {
        this.books = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getLatestAndOldest(): void {
    this._service.getOldestAndLatest().subscribe(
      (response: Book[]) => {
        this.books = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteBook(bookID: number): void {
    this._service.deleteBook(bookID).subscribe(
      (response: void) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  RedirectToAddBook() {
    this._route.navigate(['/addbook']);
  }
}

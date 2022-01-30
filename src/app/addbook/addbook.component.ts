import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookstoreService } from '../bookstore.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css'],
})
export class AddbookComponent implements OnInit {
  constructor(private _service: BookstoreService, private _route: Router) {}

  ngOnInit(): void {}

  submitFormData(bookForm: NgForm) {
    this._service.postBookToServer(bookForm.value).subscribe(
      (response: Book) => {
        console.log(response);
        bookForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        bookForm.reset();
      }
    );
  }

}

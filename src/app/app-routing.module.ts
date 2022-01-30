import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { ViewBooksComponent } from './view-books/view-books.component';

const routes: Routes = [ {path:'', component:ViewBooksComponent}, {path:'addbook', component:AddbookComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

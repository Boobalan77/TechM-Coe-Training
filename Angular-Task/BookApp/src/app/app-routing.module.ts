import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BooksFormComponent } from './components/books-form/books-form.component';

const routes: Routes = [
  { path: '', component: BooksListComponent },
  { path: 'add', component: BooksFormComponent },
  { path: 'edit/:id', component: BooksFormComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

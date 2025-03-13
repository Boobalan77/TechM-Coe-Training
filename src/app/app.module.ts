import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { BooksFormComponent } from './components/books-form/books-form.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { FilterbygenerePipe } from './pipes/filterbygenere.pipe';
import { FilterbypricePipe } from './pipes/filterbyprice.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    BookCardComponent,
    BooksFormComponent,
    BooksListComponent,
    FilterbygenerePipe,
    FilterbypricePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

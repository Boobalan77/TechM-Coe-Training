import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../models/book.model';

@Pipe({
  name: 'filterbygenere',
  standalone: false
})
export class FilterbygenerePipe implements PipeTransform {

  transform(books: Book[], genre: string): Book[] {
    if (!genre || genre === 'All') {
      return books;
    }
    return books.filter(book => book.genre === genre);
  }

}

import { Component, Inject } from '@angular/core';
import { BookServiceService } from '../../Services/book-service.service';

@Component({
  selector: 'app-books-list',
  standalone: false,
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.css'
})
export class BooksListComponent {
books: any[] = [];
genre: string[] = [];
selectedgenre: string = 'All';

constructor(private BookServiceService: BookServiceService) {}
ngOnInit() {
  this.BookServiceService.getBooks().subscribe((book: any) => {
    this.books = book;
    this.genre = [...new Set(this.books.map((book: any) => book.genre))].sort();
  });
}

onDeleteBook(id: number) {
  this.BookServiceService.deleteBook(id).subscribe(() => {
    this.books = this.books.filter(book => book.id !== id);
  });
}

}

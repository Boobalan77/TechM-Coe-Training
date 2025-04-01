import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  private apiUrl = '/api.json'; // Replace with your actual API endpoint
  private booksSubject = new BehaviorSubject<Book[]>([]);
  books$ = this.booksSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadInitialData();
  }

  private loadInitialData() {
    // Mock initial data with ratings
    const initialData: Book[] = [
      {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      genre: 'Fiction',
      publishedYear: 1925,
      rating: 4.5 // New rating field
      },
      {
      id: 2,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      genre: 'Fiction',
      publishedYear: 1960,
      rating: 5 // New rating field
      },
      {
      id: 3,
      title: 'Sapiens: A Brief History of Humankind',
      author: 'Yuval Noah Harari',
      genre: 'History',
      publishedYear: 2011,
      rating: 4 // New rating field
      },
      {
      id: 4,
      title: '1984',
      author: 'George Orwell',
      genre: 'Fiction',
      publishedYear: 1949,
      rating: 3// New rating field
      },
      {
      id: 5,
      title: 'The Subtle Art of Not Giving a F*ck',
      author: 'Mark Manson',
      genre: 'Self-Help',
      publishedYear: 2016,
      rating: 5 // New rating field
      },
      {
      id: 6,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      genre: 'Fiction',
      publishedYear: 1925,
      rating: 3 // New rating field
      },
      {
      id: 7,
      title: 'Guns, Germs, and Steel',
      author: 'Jared Diamond',
      genre: 'History',
      publishedYear: 1997,
      rating: 4 // New rating field
      },
      {
      id: 8,
      title: 'Thinking, Fast and Slow',
      author: 'Daniel Kahneman',
      genre: 'Self-Help',
      publishedYear: 2011,
      rating: 3 // New rating field
      },
      {
      id: 9,
      title: 'Brave New World',
      author: 'Aldous Huxley',
      genre: 'Fiction',
      publishedYear: 1932,
      rating: 2 // New rating field
      },
      {
      id: 10,
      title: 'The Art of War',
      author: 'Sun Tzu',
      genre: 'History',
      publishedYear: -500,
      rating: 5 // New rating field
      },
    ];
    this.booksSubject.next(initialData);
  }

  getBooks(): Observable<Book[]> {
    return this.books$;
  }

  getBookById(id: number): Observable<Book | undefined> {
    return new Observable(observer => {
      const book = this.booksSubject.value.find((bk: { id: number; }) => bk.id === id);
      observer.next(book);
      observer.complete();
    });
  }

  addBook(book: Book): Observable<any> {
    const books = [...this.booksSubject.value, book];
    this.booksSubject.next(books);
    return of(book);
  }

  updateBook(updatedBook: Book): Observable<any> {
    const books = this.booksSubject.value.map(bk => 
      bk.id === updatedBook.id ? updatedBook : bk
    );
    this.booksSubject.next(books);
    return of(updatedBook);
  }

  updateBookRating(id: number, newRating: number): void {
    const books = this.booksSubject.value.map(bk => 
      bk.id === id ? { ...bk, rating: newRating } : bk
    );
    this.booksSubject.next(books);
  }

  deleteBook(id: number): Observable<any> {
    const books = this.booksSubject.value.filter(book => book.id !== id);
    this.booksSubject.next(books);
    return of(null);
  }
}

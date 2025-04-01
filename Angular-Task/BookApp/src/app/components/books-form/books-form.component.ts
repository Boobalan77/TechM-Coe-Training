import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BookServiceService } from '../../Services/book-service.service'; // Add the correct path to the service
import { Router, ActivatedRoute } from '@angular/router';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-books-form',
  standalone: false,
template : `
<form [formGroup]="booksForm" (ngSubmit)="onSubmit()">
    <label for="title">Title:</label>
    <input id="title" formControlName="title" type="text" required />
  
    <label for="author">Author:</label>
    <input id="author" formControlName="author" type="text" required />
  
    <label for="genre">Genre:</label>
    <input id="genre" formControlName="genre" type="text" required />
  
    <label for="Publishedyr">Position:</label>
    <input id="Publishedyr" formControlName="Publishedyr" type="text" required />
  
 
    <label for="rating">Rating (1-5):</label>
    <input id="rating" formControlName="rating" type="number" min="1" max="5" required />
  
    <button type="submit">Submit</button>
  </form>
  `, 
  styleUrl: './books-form.component.css'
})
export class BooksFormComponent {
   booksForm!: FormGroup;
  isEditMode = false;
  bookId?: number;
 bookService!: BookServiceService;  
  constructor(
    private fb: FormBuilder,
    private BookServiceService: BookServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.booksForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      genre: ['', Validators.required],
      publishedYear: ['', Validators.required],
      rating: [null, [Validators.required, Validators.min(1), Validators.max(5)]] // New field
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.bookId = +id;
      this.bookService.getBookById(this.bookId).subscribe(book => {
        if (book) {
          this.booksForm.patchValue(book);
        }
      });
    }
  }

  onSubmit()  {
    if (this.booksForm.valid) {
      const bookData = this.booksForm.value;

      if (this.isEditMode && this.bookId) {
        bookData.id = this.bookId;
        this.bookService.updateBook(bookData).subscribe(() => {
          this.router.navigate(['/']);
        });
      } else {
        this.bookService.addBook(bookData).subscribe(() => {
          this.router.navigate(['/']);
        });
      }
    }
  }

}

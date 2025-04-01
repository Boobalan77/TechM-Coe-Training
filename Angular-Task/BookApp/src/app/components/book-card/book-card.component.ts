import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-card',
  standalone: false,
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css'
})
export class BookCardComponent {
  @Input() book!: Book;
  @Output() delete = new EventEmitter<number>();

  onDelete() {
    this.delete.emit(this.book.id);
  }

  // Returns an array of 5 elements for star ratings
  getStars(): number[] {
    return new Array(5);
  }

}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Book {
  title: string | null;
  author: string | null;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  books: Book[] = [
    { title: 'Убик', author: ' ФилипКиндредДик' },
    { title: 'Преступлениеинаказание', author: 'Достоевский' }
  ];

  bookForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.bookForm = this.fb.group({
      title: ['', [
        Validators.required,
        Validators.pattern(/^[А-Яа-яЁё]+$/)
      ]],
      author: ['', [
        Validators.required,
        Validators.pattern(/^[А-Яа-яЁё]+$/)
      ]]
    });
  }

  get title() {
    return this.bookForm.get('title');
  }

  get author() {
    return this.bookForm.get('author');
  }

  addBook() {
    if (this.bookForm.valid) {
      this.books.push({
        title: this.bookForm.value.title,
        author: this.bookForm.value.author
      });
      this.bookForm.reset();
    }
  }
}

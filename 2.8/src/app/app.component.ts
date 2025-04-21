import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todo.model';
import { Select, Store } from '@ngxs/store';
import { TodoState } from './todo.state';
import { AddTodo } from './todo.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoText: string = '';

  @Select(TodoState.getTodos) todos$!: Observable<Todo[]>;

  constructor(private store: Store) {}

  addTodo() {
    if (this.todoText.trim()) {
      this.store.dispatch(new AddTodo(this.todoText));
      this.todoText = '';
    }
  }
}

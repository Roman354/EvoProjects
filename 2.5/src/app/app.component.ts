import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  todo: any;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodo().subscribe(
      data => {
        console.log('Данные сервера:', data)
        this.todo = data;
      },
      error =>{
        console.error("Ошибка при получение данных :", error)
      }
    )
  }
}

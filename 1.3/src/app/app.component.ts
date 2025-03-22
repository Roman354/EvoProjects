import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  date = new Date();
  arr_peoples = [{name:"Иван", age:25, id:1}, {name:"Миша", age:20, id:2}, {name:"Никита", age:56, id:3}, {name:"Саша", age:33, id:4}];
  num = 10;
}

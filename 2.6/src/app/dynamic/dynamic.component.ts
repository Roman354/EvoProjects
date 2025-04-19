import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent  {
  data = [
    { id: 1, name: 'Никита', age: 25 },
    { id: 2, name: 'Василий', age: 30 },
    { id: 3, name: 'Антон Петрович', age: 28 },
    { id: 4, name: 'Генадий', age: 77 }
  ];
  constructor() { }

}

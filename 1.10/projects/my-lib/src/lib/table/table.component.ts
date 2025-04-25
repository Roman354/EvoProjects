import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  data = [
    { id: 1, name: 'Убик', author: 'ФилипКиндредДик' },
    { id: 2, name: 'Преступление и наказание', author: 'Достоевский' },
    { id: 3, name: 'Капитанская дочька', author: 'Пушкин' },
  ];


  constructor() { }

  ngOnInit() {
  }

}

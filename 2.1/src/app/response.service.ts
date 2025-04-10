import { Injectable } from '@angular/core';
import { Service } from './service';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {
  constructor() { }
  arrObjects: Service[] = [
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
  ]
}

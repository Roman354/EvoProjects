import { Component, OnInit } from '@angular/core';
import { Service } from './service';
import { ResponseService } from './response.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userInfo: Service[] = [];
  constructor(public responseService: ResponseService) {}

  ngOnInit(): void {
    this.userInfo = this.responseService.arrObjects;
  }
}

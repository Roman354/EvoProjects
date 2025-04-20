import { Component, OnInit } from '@angular/core';
import { AuthService, Role } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  setRole(role: Role ){
    this.authService.setRole(role);
  }
}

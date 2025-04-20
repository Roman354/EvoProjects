import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AuthService, Role } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  role$!: Observable<Role>

  constructor(private authService: AuthService){}

  ngOnInit(){
    this.role$ = this.authService.role$
  }
}

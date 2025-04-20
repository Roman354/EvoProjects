import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  private role = new BehaviorSubject<Role>('user');
  role$ = this.role.asObservable();


  get currentRole() {
    return this.role.value;
  }

  setRole(role: Role) {
    this.role.next(role);
  }
}

export type Role = 'user' | 'admin';

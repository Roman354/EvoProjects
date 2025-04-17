import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from './api.service';

import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class PostResolver implements Resolve<any> {
  constructor(private api: ApiService) { }

  resolve(): Observable<any> {
    return this.api.getSinglePost();
  }
}

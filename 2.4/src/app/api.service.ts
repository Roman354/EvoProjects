import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  getCommentsWithParams() {
    const params = new HttpParams().set('postId', '1');
    return this.http.get('https://jsonplaceholder.typicode.com/comments', { params })
  }

  postEmpty() {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', {})
  }

  getWithErrorHandling() {
    return this.http.get('https://jsonplaceholder.typicode.com/post')
      .pipe(
        catchError(error => {
          console.error('Ошибка при запросе:', error.message);
          return throwError(() => error);
        })
      )
  }

  getWithHeadersAndText() {
    const headers = new HttpHeaders().set('X-Test', '1');
    return this.http.get('https://jsonplaceholder.typicode.com/posts', {
      headers,
      responseType: 'text'
    })
  }

  deletePost() {
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/1')

  }

  getSinglePost() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1');
  }

}

import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  constructor(private api: ApiService) {}

  getPosts() {
    this.api.getPosts().subscribe(console.log);
  }

  getComments() {
    this.api.getCommentsWithParams().subscribe(console.log);
  }

  postEmpty() {
    this.api.postEmpty().subscribe(console.log);
  }

  getWithError() {
    this.api.getWithErrorHandling().subscribe(console.log);
  }

  getWithHeaders() {
    this.api.getWithHeadersAndText().subscribe(console.log);
  }

  deletePost() {
    this.api.deletePost().subscribe(console.log);
  }
}

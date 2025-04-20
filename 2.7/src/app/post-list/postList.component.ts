import { Observable } from 'rxjs';
import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../post';


@Component({
  selector: 'app-postList',
  templateUrl: './postList.component.html',
  styleUrls: ['./postList.component.css']
})
export class PostListComponent implements OnInit {
  data$!: Observable<Post[]>;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.data$ = this.postService.getPosts();
  }

}

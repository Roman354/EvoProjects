import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { Observable } from 'rxjs';
import { Post } from '../post';

@Component({
  selector: 'app-postDetail',
  templateUrl: './postDetail.component.html',
  styleUrls: ['./postDetail.component.css']
})
export class PostDetailComponent implements OnInit {
  id!:number;
  data$!: Observable<Post>;

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    this.id = +this.activatedRoute.snapshot.params["id"];
    this.data$ =this.postService.getPostById(this.id);
  }

}

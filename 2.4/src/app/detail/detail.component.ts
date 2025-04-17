import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: []
})
export class DetailComponent implements OnInit {
  postData: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit():void {
    this.postData = this.route.snapshot.data['post'];
    console.log(this.postData)
  }

}

import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-inline',
  templateUrl: './inline.component.html',
  styleUrls: ['./inline.component.css']
})
export class InlineComponent implements OnInit {

  constructor(private meta: Meta,  private title: Title) {
    this.meta.addTags([ { name: 'og:title', content: 'The Rock' },
      { name: 'og:type', content: 'video.movie' },
      { name: 'og:url', content: '//www.imdb.com/title/tt0117500/' },]
    );
   }

  ngOnInit() {
    // this.title.setTitle('Open Graph Page');
  }

}

import { Component, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = '1.8';
  ngOnInit(): void {
    Notiflix.Notify.success('Sol lucet omnibus');
    Notiflix.Notify.failure('Qui timide rogat docet negare');

    Notiflix.Notify.warning('Memento te hominem esse');

    Notiflix.Notify.info('Cogito ergo sum');
    Notiflix.Notify.success(
      'Click Me',
      function cb() {
      },
    );

    Notiflix.Notify.success(
      'Click Me',
      {
        timeout: 6000,
      },
    );

    Notiflix.Notify.success(
      'Click Me',
      function cb() {
      },
      {
        timeout: 4000,
      },
    );
  }
}

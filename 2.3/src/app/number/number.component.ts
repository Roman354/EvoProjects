import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit, OnDestroy {

  consecutiveNumbers: number[] = [];
  randomNumbers: string[] = [];

  private conSub?: Subscription;
  private randSub?: Subscription;

  ngOnInit(){
    this.startConsecutiveStream();
    this.startRandomStream();
  }

  startConsecutiveStream() {
    this.conSub = interval(2000).subscribe(count => {
      this.consecutiveNumbers.push(count);
    });
  }

  startRandomStream() {
    this.randSub = interval(2000)
      .pipe(
        map(() => `Random Value: ${Math.floor(Math.random() * 1000)}`)
      )
      .subscribe(randomValue => {
        this.randomNumbers.push(randomValue);
      });
  }

  stopConsecutive() {
    this.conSub?.unsubscribe();
  }

  stopRandom() {
    this.randSub?.unsubscribe();
  }

  ngOnDestroy(){
    this.stopConsecutive();
    this.stopRandom();
  }
}

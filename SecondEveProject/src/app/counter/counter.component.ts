import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent  {

  count = 0;
  countChange(change: boolean){
    this.count = change? this.count+1 : this.count-1;
  }
}

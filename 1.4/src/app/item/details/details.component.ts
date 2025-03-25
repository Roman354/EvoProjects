import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {

  constructor(
     private activeRouter: ActivatedRoute
   ) {}

   ngOnInit() {
     console.log("Текущие параметры:", this.activeRouter.parent?.snapshot.params)
     console.log("Текущие параметр id:", this.activeRouter.parent?.snapshot.params["id"])
   }


}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageRoutingModule } from './page-routing.module';
import { ItemComponent } from './item/item.component';


@NgModule({
  imports: [
    CommonModule,
    PageRoutingModule,
  ],
  declarations: [ItemComponent]
})
export class PageModule { }

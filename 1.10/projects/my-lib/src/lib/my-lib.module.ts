import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { TableComponent } from './table/table.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    MyLibComponent
    ,TableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MyLibComponent,
    TableComponent
  ]
})
export class MyLibModule { }

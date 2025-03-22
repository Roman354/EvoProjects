import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlusFivePipe } from './plusFive.pipe';

@NgModule({
  declarations: [
    AppComponent,
      PlusFivePipe
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ItemComponent } from './item/item.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [				
    AppComponent,
      ContactComponent,
      AboutComponent,
      ItemComponent,
      MainComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

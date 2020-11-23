import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Conditional } from './conditional.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
	Conditional
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

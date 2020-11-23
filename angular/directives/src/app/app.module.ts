import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Conditional } from './conditional.component';
import { PersonList} from './personlist.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
	Conditional,
	PersonList
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

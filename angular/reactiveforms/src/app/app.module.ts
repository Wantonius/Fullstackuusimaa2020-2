import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {ReactiveForm} from './reactiveform.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
	ReactiveForm
  ],
  imports: [
    BrowserModule,
	ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

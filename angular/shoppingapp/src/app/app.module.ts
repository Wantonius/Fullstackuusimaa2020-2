import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginForm} from './components/loginform.component';
import {LoginService} from './services/loginservice.service';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ShoppingList} from './components/shoppinglist.component';
import {ShoppingForm} from './components/shoppingform.component';
import {ShoppingService} from './services/shoppingservice.service';

@NgModule({
  declarations: [
    AppComponent,
	LoginForm,
	ShoppingList,
	ShoppingForm
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule,
	HttpClientModule
  ],
  providers: [LoginService,ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }

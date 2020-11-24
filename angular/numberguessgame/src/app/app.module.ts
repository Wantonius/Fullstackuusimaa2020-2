import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {StartScreen} from './components/startscreen.component';
import {GameScreen} from './components/gamescreen.component';
import {GameMechanics} from './services/gamemechanics.service';

@NgModule({
  declarations: [
    AppComponent,
	StartScreen,
	GameScreen
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule
  ],
  providers: [GameMechanics],
  bootstrap: [AppComponent]
})
export class AppModule { }

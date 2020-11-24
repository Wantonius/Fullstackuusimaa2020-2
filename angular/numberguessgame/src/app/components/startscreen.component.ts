import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {GameMechanics} from '../services/gamemechanics.service';

@Component({
	selector:"startscreen",
	templateUrl:"./startscreen.component.html"
})
export class StartScreen {
	
	public playerName:string = "";
	
	constructor(private _gamemechanics:GameMechanics, private _router:Router) {}

	startGame() {
		if(this.playerName.length === 0) {
			return;
		}
		this._gamemechanics.startGame(this.playerName);
		this.playerName = "";
		this._router.navigate(["/game"]);
	}
}
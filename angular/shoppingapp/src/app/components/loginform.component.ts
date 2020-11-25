import {Component,OnInit} from '@angular/core';
import {LoginService} from '../services/loginservice.service';
import {Router} from '@angular/router';

@Component({
	selector:"loginform",
	templateUrl:"./loginform.component.html"
})
export class LoginForm implements OnInit {
	
	username:string = "";
	password:string = "";
	message:string = "";
	
	constructor(private _login:LoginService, private _router:Router) {}
	
	// TODO: ngOnInit check login status -> route to shoppinglist

	ngOnInit() {
		
	}

	login() {
		if(this.username.length < 4 || this.password.length < 8) {
			this.message = "Username must be atleast 4 characters and password 8 characters long";
			return;
		}
		this._login.login(this.username,this.password).subscribe(
			data => {
				this.message = data.message;
				this._login.setLoginState(true,data.token);
				//TODO: route to shoppinglist 
			},
			error => this.message = error.message,
			() => console.log("Login complete")		
		);
	}
	
	register() {
		if(this.username.length < 4 || this.password.length < 8) {
			this.message = "Username must be atleast 4 characters and password 8 characters long";
			return;
		}
		this._login.register(this.username,this.password).subscribe(
			data => this.message = data.message,
			error => this.message = error.message,
			() => console.log("Register complete")
		);
	}
}
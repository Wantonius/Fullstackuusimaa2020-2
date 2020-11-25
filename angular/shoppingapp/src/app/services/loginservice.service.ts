import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {BackendMessage} from '../models/backendmessage.model';

@Injectable()
export class LoginService {
	private isLogged:boolean = false;
	private token:string = "";
	
	constructor(private _http:HttpClient) {
		if(sessionStorage.getItem("logininfo")) {
			let info = JSON.parse(sessionStorage.getItem("logininfo"));
			this.isLogged = info.isLogged;
			this.token = info.token;
		}
	}
	
	register(username:string,password:string) {
		const user = {
			"username":username,
			"password":password
		}
		const httpOptions = {
			headers: new HttpHeaders({
				"Content-type":"application/json"
			})
		}
		return this._http.post<BackendMessage>("/a/register",user,httpOptions);
	}

	login(username:string,password:string) {
		const user = {
			"username":username,
			"password":password
		}
		const httpOptions = {
			headers: new HttpHeaders({
				"Content-type":"application/json"
			})
		}
		return this._http.post<BackendMessage>("/a/login",user,httpOptions);
	}	
	
	logout() {
		const httpOptions = {
			headers:new HttpHeaders({
				"Content-type":"application/json",
				"token":this.token
			})
		}
		return this._http.post<BackendMessage>("/a/logout",{},httpOptions);
	}
	
	setLoginState(login:boolean,token:string) {
		this.isLogged = login;
		this.token = token;
		sessionStorage.setItem("logininfo",JSON.stringify({
			isLogged:this.isLogged,
			token:this.token
		}))
	}
	
	isUserLogged() {
		return this.isLogged;
	}
	
	getToken() {
		return this.token;
	}
}
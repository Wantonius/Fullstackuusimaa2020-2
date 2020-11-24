import {Component} from '@angular/core';
import {ShoppingItem} from '../models/shoppingitem.model';
import {ShoppingService} from '../services/shoppingservice.service';

@Component({
	selector:"shoppingform",
	templateUrl:"./shoppingform.component.html"
})
export class ShoppingForm {
	
	shoppingItem:ShoppingItem = new ShoppingItem("",0,0,0);
	
	constructor(private _shoppingService:ShoppingService) {}
	
	addToList() {
		this._shoppingService.addToList(this.shoppingItem);
		this.shoppingItem = new ShoppingItem("",0,0,0);
	}	
}
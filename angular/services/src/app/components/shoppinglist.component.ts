import {Component,OnInit} from '@angular/core';
import {ShoppingItem} from '../models/shoppingitem.model';
import {ShoppingService} from '../services/shoppingservice.service';

@Component({
	selector:"shoppinglist",
	templateUrl:"./shoppinglist.component.html"
})
export class ShoppingList implements OnInit{
	
	shoppingItem:ShoppingItem = new ShoppingItem("",0,0,0);
	shoppingList:ShoppingItem[] = [];
	
	constructor(private _shoppingService:ShoppingService) {}
	
	ngOnInit() {
		this.getList();
	}
	
	getList() {
		this.shoppingList = this._shoppingService.getList()
	}
	
	addToList() {
		this._shoppingService.addToList(this.shoppingItem);
		this.shoppingItem = new ShoppingItem("",0,0,0);
		this.getList();
	}
	
	removeFromList(idx:number) {
		this._shoppingService.removeFromList(idx);
		this.getList();
	}
}
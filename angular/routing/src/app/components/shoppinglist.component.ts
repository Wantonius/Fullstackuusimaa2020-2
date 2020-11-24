import {Component,OnInit} from '@angular/core';
import {ShoppingItem} from '../models/shoppingitem.model';
import {ShoppingService} from '../services/shoppingservice.service';

@Component({
	selector:"shoppinglist",
	templateUrl:"./shoppinglist.component.html"
})
export class ShoppingList implements OnInit{
	

	shoppingList:ShoppingItem[] = [];
	
	constructor(private _shoppingService:ShoppingService) {}
	
	ngOnInit() {
		this.getList();
	}
	
	getList() {
		this.shoppingList = this._shoppingService.getList()
	}
	
	
	removeFromList(idx:number) {
		this._shoppingService.removeFromList(idx);
		this.getList();
	}
}
import {Injectable} from '@angular/core';
import {ShoppingItem} from '../models/shoppingitem.model';

@Injectable()
export class ShoppingService {
	
	private shoppingList:ShoppingItem[] = [];
	private id:number = 100;
	
	getList() {
		return this.shoppingList;
	}

	addToList(shoppingitem:ShoppingItem) {
		shoppingitem.id = this.id;
		this.id++;
		this.shoppingList.push(shoppingitem);
	}
	
	removeFromList(idx) {
		this.shoppingList.splice(idx,1);
	}
}
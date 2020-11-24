import {Component} from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';

@Component({
	selector:"reactive-form",
	templateUrl:"./reactiveform.component.html"
})
export class ReactiveForm {
	
	contactForm = new FormGroup({
		firstname:new FormControl(),
		lastname:new FormControl(),
		email:new FormControl(),
		phone:new FormControl()
	})
	
	list = [];
	
	onSubmit() {
		this.list.push(this.contactForm.value);
	}
	
	removeContact(idx) {
		this.list.splice(idx,1);
	}
}
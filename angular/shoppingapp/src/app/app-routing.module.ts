import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginForm} from './components/loginform.component';
import {ShoppingList} from './components/shoppinglist.component';
import {ShoppingForm} from './components/shoppingform.component';

const routes: Routes = [
	{path:"",component:LoginForm},
	{path:"list",component:ShoppingList},
	{path:"form",component:ShoppingForm},
	{path:"**",redirectTo:"/"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

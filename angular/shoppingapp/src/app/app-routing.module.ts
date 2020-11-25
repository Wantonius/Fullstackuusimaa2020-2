import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginForm} from './components/loginform.component';

const routes: Routes = [
{path:"",component:LoginForm}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

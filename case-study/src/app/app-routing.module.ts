import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerComponent} from './customer/customer.component';
import {DetailComponent} from './customer/detail/detail.component';
import {CreateComponent} from './customer/create/create.component';


const routes: Routes = [
  {path: 'customer', component: CustomerComponent},
  {path: 'edit', component: CustomerComponent},
  {path: 'customer/detail/:id', component: DetailComponent},
  {path: 'customer/create', component: CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

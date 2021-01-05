import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { DetailComponent } from './customer/detail/detail.component';
import { CreateComponent } from './customer/create/create.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {path: 'customer', component: CustomerComponent},
  {path: 'edit', component: CustomerComponent},
  {path: 'customer/detail/:id', component: DetailComponent},
  {path: 'customer/create', component: CreateComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    Ng2SearchPipeModule,
    FormsModule
  ],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    PageNotFoundComponent]
})
export class AppRoutingModule { }

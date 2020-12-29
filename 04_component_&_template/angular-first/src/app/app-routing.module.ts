import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentDetailComponent} from "./student-detail/student-detail.component";
import {StudentListComponent} from "./student-list/student-list.component";
import {HackernewsComponent} from "./hackernews/hackernews.component";


const routes: Routes = [
  {path: 'student-detail', component: StudentDetailComponent},
  {path: 'student-list', component: StudentListComponent},
  {path: 'hacker-news', component: HackernewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

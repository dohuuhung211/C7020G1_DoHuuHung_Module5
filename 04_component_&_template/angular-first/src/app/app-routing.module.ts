import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentDetailComponent} from './student-detail/student-detail.component';
import {StudentListComponent} from './student-list/student-list.component';
import {HackernewsComponent} from './hackernews/hackernews.component';
import {NameCardComponent} from './name-card/name-card.component';
import {ProgressBarComponent} from './progress-bar/progress-bar.component';
import {CountdownTimerComponent} from './countdown-timer/countdown-timer.component';
import {RatingBarComponent} from './rating-bar/rating-bar.component';
import {StudentFormComponent} from './student-form/student-form.component';
import {StudentModelDrivenFormComponent} from './student-model-driven-form/student-model-driven-form.component';
import {DictionaryPageComponent} from './dictionary-page/dictionary-page.component';
import {DictionaryDetailComponent} from './dictionary-detail/dictionary-detail.component';
import {AuthGuard} from './auth.guard';



const routes: Routes = [
  {path: 'hacker-news', component: HackernewsComponent},
  {path: 'name-card', component: NameCardComponent},
  {path: 'progress-bar', component: ProgressBarComponent},
  {path: 'countdown-timer', component: CountdownTimerComponent},
  {path: 'rating-bar', component: RatingBarComponent},
  {path: 'create-student', component: StudentModelDrivenFormComponent},
  {path: 'create', component: StudentFormComponent},
  {path: 'student-detail/:id', component: StudentDetailComponent},
  {path: '', component: StudentListComponent},
  {
    path: 'dictionary',
    component: DictionaryPageComponent,
    children: [
      {
        path: ':key',
        component: DictionaryDetailComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StudentListComponent} from "./student-list/student-list.component";
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { HackernewsComponent } from './hackernews/hackernews.component';
import { NameCardComponent } from './name-card/name-card.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { CountdownTimerAliasComponent } from './countdown-timer-alias/countdown-timer-alias.component';
import { CountdownTimerEventAliasComponent } from './countdown-timer-event-alias/countdown-timer-event-alias.component';
import { CountdownTimerEventComponent } from './countdown-timer-event/countdown-timer-event.component';
import { CountdownTimerGetSetComponent } from './countdown-timer-get-set/countdown-timer-get-set.component';
import { CountdownTimerOnchangesComponent } from './countdown-timer-onchanges/countdown-timer-onchanges.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { RatingBarComponent } from './rating-bar/rating-bar.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentModelDrivenFormComponent } from './student-model-driven-form/student-model-driven-form.component';
import { StudentDAOComponent } from './student-dao/student-dao.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentDetailComponent,
    HackernewsComponent,
    NameCardComponent,
    ProgressBarComponent,
    CountdownTimerAliasComponent,
    CountdownTimerEventAliasComponent,
    CountdownTimerEventComponent,
    CountdownTimerGetSetComponent,
    CountdownTimerOnchangesComponent,
    CountdownTimerComponent,
    RatingBarComponent,
    StudentFormComponent,
    StudentModelDrivenFormComponent,
    StudentListComponent,
    StudentDAOComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

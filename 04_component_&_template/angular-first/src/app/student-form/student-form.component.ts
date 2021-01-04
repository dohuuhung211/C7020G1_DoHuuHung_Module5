import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(createStudent: NgForm) {
    console.log(createStudent.value);
  }
}

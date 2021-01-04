import { Component, OnInit } from '@angular/core';
import { IStudent } from '../student-detail/student-detail.component';
import {StudentDAOComponent} from "../student-dao/student-dao.component";
import {StudentServiceService} from "../student-service.service";


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  
  registerForm = false;
  students: IStudent[];
  constructor(private studentServiceService: StudentServiceService) { }

  ngOnInit(): void {
    this.students = this.studentServiceService.findAll()
  }

  showRegisterForm() {
    this.registerForm = !this.registerForm;
  }
}

import {Component, Input, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {StudentServiceService} from "../student-service.service";
export interface IStudent {
  id: number;
  name: string;
  mark: number;
  image: string;
}
@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {
  student: IStudent;
  sub: Subscription;
  constructor(private activatedRoute: ActivatedRoute,
              private studentService: StudentServiceService) { }

  ngOnInit(): void {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      console.log(id);
      this.student = this.studentService.findById(parseInt(id));
      console.log(this.student.name);
    });
  }

  getMark(value: any) {
    this.student.mark = value;
  }

  updateName() {
    this.student.name = 'Trang';
  }
}

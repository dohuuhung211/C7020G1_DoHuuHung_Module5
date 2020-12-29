import {Component, Input, OnInit} from '@angular/core';
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
  @Input()
  student: IStudent;
  constructor() { }

  ngOnInit(): void {
  }

  getMark(value: any) {
    this.student.mark = value;
  }

  updateName() {
    this.student.name = 'Trang';
  }
}

import { Component, OnInit } from '@angular/core';
import { IStudent } from '../student-detail/student-detail.component';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  students: IStudent[] = [
    {
      id: 1,
      name: 'Do Huu Hung',
      mark: 0,
      image: 'https://dyl80ryjxr1ke.cloudfront.net/external_assets/hero_examples/hair_beach_v1785392215/result.jpeg'
    },
    {
      id: 2,
      name: 'Hieu',
      mark: 0,
      image: 'https://dyl80ryjxr1ke.cloudfront.net/external_assets/hero_examples/hair_beach_v1785392215/result.jpeg'
    },
    {
      id: 3,
      name: 'Cuong',
      mark: 0,
      image: 'https://dyl80ryjxr1ke.cloudfront.net/external_assets/hero_examples/hair_beach_v1785392215/result.jpeg'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }
  studentDetail: IStudent;
  getStudent(student: IStudent) {
    this.studentDetail = student;
  }
}

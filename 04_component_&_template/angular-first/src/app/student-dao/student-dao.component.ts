import { Component, OnInit } from '@angular/core';
import {IStudent} from "../student-detail/student-detail.component";

@Component({
  selector: 'app-student-dao',
  templateUrl: './student-dao.component.html',
  styleUrls: ['./student-dao.component.scss']
})
export class StudentDAOComponent implements OnInit {
  static studentList: IStudent[] = [
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
  static getStudentList(){
    return this.studentList;
  }
}

import { Injectable } from '@angular/core';
import { IStudent } from './student-detail/student-detail.component';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  Students: IStudent[] = [
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
  findAll(){
    return this.Students;
  }
  findById(id): IStudent{
    let tempStudent = this.Students.find(
      (student) => student.id === id
    );
    console.log(tempStudent);
    return this.Students.find(
      (student) => student.id === id
    );
  }

  addNew(value: IStudent) {
    value.id = parseInt(String(value.id));
    this.Students.unshift(value);
    console.log(this.Students);
  }
}

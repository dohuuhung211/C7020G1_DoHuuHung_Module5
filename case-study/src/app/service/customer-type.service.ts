import { Injectable } from '@angular/core';
import {ICustomerType} from '../model/ICustomerType';
import {ICustomer} from '../model/ICustomer';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  // customerTypeList: ICustomerType[] = [
  //   {
  //     id: 1,
  //     name: 'Diamond'
  //   },
  //   {
  //     id: 2,
  //     name: 'Platinum'
  //   },
  //   {
  //     id: 3,
  //     name: 'Gold'
  //   },
  //   {
  //     id: 4,
  //     name: 'Silver'
  //   },
  //   {
  //     id: 5,
  //     name: 'Member'
  //   }
  // ];
  private baseURL = 'http://localhost:3000/customerType';
  constructor(
    private http: HttpClient
  ) {
  }
  findAll(): Observable<ICustomerType[]>{
    return this.http.get<ICustomerType[]>(this.baseURL);
  }
  findById(id): Observable<ICustomerType>{
    return this.http.get<ICustomerType>(this.baseURL + '/' + id);
  }
}

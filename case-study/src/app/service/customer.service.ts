import { Injectable } from '@angular/core';
import {ICustomer} from '../model/ICustomer';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  // customerList: ICustomer[] = [
  //   {
  //     id: 1,
  //     name: 'Hung',
  //     dateOfBirth: '22/11/1995',
  //     idCard: '201666868',
  //     phone: '0334904905',
  //     email: 'hung@gmail.com',
  //     address: 'Da Nang',
  //     idCustomerType: {
  //       id: 1,
  //       name: 'Diamond'
  //     }
  //   }
  // ];
  private baseURL = 'http://localhost:3000/customers';
  constructor(
    private http: HttpClient
  ) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  findAll(): Observable<ICustomer[]>{
    return this.http.get<ICustomer[]>(this.baseURL);
  }
  // findById(id): ICustomer{
  //   return this.customerList.find(
  //     // tslint:disable-next-line:triple-equals
  //     (customer) => customer.id == id
  //   );
  // }
  findById(id): Observable<ICustomer>{
    return this.http.get<ICustomer>(this.baseURL + '/' + id);
  }
  // saveCustomer(customer: ICustomer){
  //   this.customerList.unshift(customer);
  // }
  saveCustomer(customer): Observable<ICustomer> {
    return this.http.post<ICustomer>(this.baseURL, JSON.stringify(customer), this.httpOptions)
  }
}

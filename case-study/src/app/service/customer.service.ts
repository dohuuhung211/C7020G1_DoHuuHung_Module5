import { Injectable } from '@angular/core';
import {ICustomer} from '../model/ICustomer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerList: ICustomer[] = [
    {
      id: 1,
      name: 'Hung',
      dateOfBirth: '22/11/1995',
      idCard: '201666868',
      phone: '0334904905',
      email: 'hung@gmail.com',
      address: 'Da Nang',
      idCustomerType: {
        id: 1,
        name: 'Diamond'
      }
    }
  ];
  constructor() { }
  findAll(){
    return this.customerList;
  }
  findById(id): ICustomer{
    return this.customerList.find(
      // tslint:disable-next-line:triple-equals
      (customer) => customer.id == id
    );
  }
  saveCustomer(customer: ICustomer){
    this.customerList.unshift(customer);
  }
}

import { Injectable } from '@angular/core';
import {ICustomerType} from '../model/ICustomerType';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  customerTypeList: ICustomerType[] = [
    {
      id: 1,
      name: 'Diamond'
    },
    {
      id: 2,
      name: 'Platinum'
    },
    {
      id: 3,
      name: 'Gold'
    },
    {
      id: 4,
      name: 'Silver'
    },
    {
      id: 5,
      name: 'Member'
    }
  ];
  constructor() { }
  findAll(){
    return this.customerTypeList;
  }
  findById(id): ICustomerType{
    return this.customerTypeList.find(
      (customerType) => customerType.id === id
    );
  }
}

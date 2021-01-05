import {ICustomerType} from './ICustomerType';

export interface ICustomer {
  id: number;
  name: string;
  dateOfBirth: string;
  idCard: string;
  phone: string;
  email: string;
  address: string;
  idCustomerType: string;
}

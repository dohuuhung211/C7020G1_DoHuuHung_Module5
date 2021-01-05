import { Component, OnInit } from '@angular/core';
import {ICustomer} from '../model/ICustomer';
import {CustomerService} from '../service/customer.service';
import {CustomerTypeService} from '../service/customer-type.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customers: ICustomer[];
  term: string;
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.findAll().toPromise().then(data => {
      this.customers = data;
    });
  }

}

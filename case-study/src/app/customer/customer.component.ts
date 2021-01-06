import { Component, OnInit } from '@angular/core';
import {ICustomer} from '../model/ICustomer';
import {CustomerService} from '../service/customer.service';
import {CustomerTypeService} from '../service/customer-type.service';
import {Router} from '@angular/router';
import {Subscribable, Subscriber, Subscription} from 'rxjs';
import {AlertService} from './alert.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customers: ICustomer[];
  term: string;
  p: any;
  sub: Subscription
  constructor(private customerService: CustomerService,
              private alertService: AlertService
              ) { }

  ngOnInit(): void {
    this.customerService.findAll().toPromise().then(data => {
      this.customers = data;
    });
  }

  search(value: string) {
    this.customerService.searchByName(value.toLocaleLowerCase()).toPromise().then(data => {
      this.customers = data;
    });
  }

  onDel() {
    this.sub = this.customerService.deleteCustomer(this.idSelect).subscribe(
      () => {
        this.customers = this.customers.filter(customer => customer.id !== this.idSelect);
        this.alertService.showAlertSuccess('Deleted successfully!');
      }
    );
  }

  idSelect: number;
  temp(id: number) {
    this.idSelect = id;
  }
}

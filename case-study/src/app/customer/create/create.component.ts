import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Route, Router} from '@angular/router';
import {CustomerService} from '../../service/customer.service';
import {CustomerTypeService} from '../../service/customer-type.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  customerForm: FormGroup;
  constructor(private router: Router,
              private customerService: CustomerService,
              private customerTypeService: CustomerTypeService) { }
  ngOnInit(): void {
    this.customerForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      dateOfBirth: new FormControl(''),
      idCard: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl(''),
      address: new FormControl(''),
      idCustomerType: new FormControl('')
    });
  }
  saveCustomer(){
    for (const e of this.customerTypeService.findAll()){
      // tslint:disable-next-line:triple-equals
      if (e.id == this.customerForm.value.idCustomerType){
        this.customerForm.value.idCustomerType = e;
      }
    }
    console.log(this.customerForm.value);
    this.customerService.saveCustomer(this.customerForm.value);
    this.router.navigateByUrl('customer');
  }
}

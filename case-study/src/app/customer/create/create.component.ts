import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Route, Router} from '@angular/router';
import {CustomerService} from '../../service/customer.service';
import {CustomerTypeService} from '../../service/customer-type.service';
import {ICustomerType} from '../../model/ICustomerType';
import {ToastrService} from 'ngx-toastr';
import {AlertService} from '../alert.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  customerForm: FormGroup;
  customerTypeList: ICustomerType[];
  constructor(
              private router: Router,
              private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private alertService: AlertService,
              private formBuilder: FormBuilder
              ) {
    this.customerTypeService.findAll().toPromise().then(data => {
      this.customerTypeList = data;
    });
  }
  ngOnInit(): void {
    this.customerForm = this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      idCard: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required]],
      address: ['', [Validators.required]],
      idCustomerType: ['']
    });
  }
  saveCustomer() {
    this.customerService.saveCustomer(this.customerForm.value).subscribe(data => {
      this.router.navigateByUrl('customer').then(r => this.alertService.showAlertSuccess('Added successfully!'));
    });
  }
  // saveCustomer(){
  //   for (const e of this.customerTypeService.findAll()){
  //     // tslint:disable-next-line:triple-equals
  //     if (e.id == this.customerForm.value.idCustomerType){
  //       this.customerForm.value.idCustomerType = e;
  //     }
  //   }
  //   console.log(this.customerForm.value);
  //   this.customerService.saveCustomer(this.customerForm.value);
  //   this.router.navigateByUrl('customer');
  // }
}

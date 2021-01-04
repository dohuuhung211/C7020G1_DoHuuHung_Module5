import { Component, OnInit } from '@angular/core';
import {ICustomer} from '../../model/ICustomer';
import {CustomerService} from '../../service/customer.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  customer: ICustomer;
  sub: Subscription;
  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.activatedRoute);
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // tslint:disable-next-line:radix
      const id: number = parseInt(paramMap.get('id'));
      console.log(id);
      this.customer = this.customerService.findById(id);
    });
  }

}

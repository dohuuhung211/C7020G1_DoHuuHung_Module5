import { Component, OnInit } from '@angular/core';
import {ICustomer} from '../../model/ICustomer';
import {CustomerService} from '../../service/customer.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  customer: ICustomer;
  sub: Subscription;
  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // tslint:disable-next-line:radix
      const id: number = parseInt(paramMap.get('id'));
      console.log(id);
      this.customerService.findById(id).subscribe((data: ICustomer) => {
        this.customer = data;
      });
    });
    // this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) =>{
    //   this.customerService.findById(paramMap.get('id')).subscribe((data: ICustomer) =>{
    //     this.
    //   });
    // });
  }

}

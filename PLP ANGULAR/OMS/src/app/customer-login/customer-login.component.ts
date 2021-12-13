import { CustomerHomeComponent } from './../customer-home/customer-home.component';
import { CookieService } from 'ngx-cookie-service';
import { CustomerService } from './../service/customer.service';

import { Router } from '@angular/router';

import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {
  public static customer: Object = {};
  msg;
  
  constructor(
    private service: CustomerService,
    private fb: FormBuilder,
    private router: Router,
    private cookies: CookieService
  ) { }

  ngOnInit() {
    this.init();
  }

  get customerId() {
    return this.loginForm.get('customerId');
  }

  get password() {
    return this.loginForm.get('password');
  }
  loginForm = new FormGroup({
    customerId : new FormControl('', [
      Validators.required,

    ]),
    password : new FormControl('', [
      Validators.required,
      Validators.minLength(4),

    ])

  });

init() {
  // this.loginForm = this.fb.group({
  //   customerId : ['', Validators.required],
  //   password : ['', Validators.required]
  // });
}
onSubmit() {
  this.service.loginCustomer(this.loginForm.value).subscribe(Customer => {
    
    if (Customer != null) {
      console.log(Customer.customerId);
    this.service.getCustomerId(Customer.customerId);
    this.cookies.set('customer', Customer);
    this.msg="";
    this.loginForm.reset();
    this.router.navigate(['./customerHome']);
    } else {
      this.msg="Please Provide Proper UserId and Password";
      this.loginForm.reset();
      
    }
  });
}
}

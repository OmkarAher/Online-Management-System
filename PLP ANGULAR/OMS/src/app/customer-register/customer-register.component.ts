import { CustomerService } from './../service/customer.service';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent implements OnInit {
 
  number;
  constructor(
    private service: CustomerService,
    private fb: FormBuilder,
    private router: Router
  ) { }




  ngOnInit() {
    this.init();

  }
  get customerName() {
    return this.registerForm.get('customerName');
  }
  get customerId() {
    return this.registerForm.get('customerId');
  }

  get email() {
    return this.registerForm.get('email');
  }
  get contact() {
    return this.registerForm.get('contact');
  }

  get age() {
    return this.registerForm.get('age');
  }

  get gender() {
    return this.registerForm.get('gender');
  }

  get password() {
    return this.registerForm.get('password');
  }


  registerForm = new FormGroup({
    customerId : new FormControl('',[
      Validators.required
    ]),
    customerName  : new FormControl('', [
      Validators.required,

    ]),
    email  : new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    age  : new FormControl('', [
      Validators.required,
      Validators.maxLength(2)
    ]),
    contact  : new FormControl('', [
      Validators.required,
      Validators.maxLength(10),
      Validators.minLength(10)
    ]),
    gender  : new FormControl('', [
      Validators.required,
      
    ]),
    password : new FormControl('', [
      Validators.required,
      Validators.minLength(4),

    ])

  });


  init() {
    const mobile = RegExp('[1-9]{10}');
    if (mobile.test(this.number)) { 
      return true;
       }
       const age = RegExp('[1-9]{2}');
    if (mobile.test(this.number)) { 
      return true;
       }

  }


  onSubmit() {
    this.service.registerUser(this.registerForm.value).subscribe(data => {

      this.registerForm.reset();
      this.service.getCustomerId(data.customerId);
      window.alert('Please Enter Address To Continue');
      this.router.navigate(['addAddress']);
     // this.router.navigate(['./login']);
    });
  }

}

import { CustomerService } from './../service/customer.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {

// updateform = new FormGroup(
// {CustomerName : new FormControl("",[Validators.required])
// }
// )

// get CustomerName(){
//   return this.updateform.get('CustomerName');

// }

//   constructor() { }

//   ngOnInit() {
//   }

// }

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
  // get customerId() {
  //   return this.registerForm.get('customerId');
  // }

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
    this.service.updateCustomer(this.registerForm.value).subscribe(() => {

      this.registerForm.reset();
      window.alert('updated Successfull');
      this.router.navigate(['./customerHome']);
     // this.router.navigate(['./login']);
    });
  }
  mobile(e)
  {
     this.number = e.target.value;
  }
  checkAge(age)
  {
    this.number = age.target.value;
  }

}

import { Router } from '@angular/router';
import { LoginService } from './../service/login.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerform: FormGroup;
  constructor(private service: LoginService,
    private fb: FormBuilder,
    private router: Router) { }

  init() {
    this.registerform = this.fb.group(
      {
        customerName : ['', Validators.required],
        password : ['', Validators.required],
        email : ['', Validators.required],
        age : ['', Validators.required],
        addressId : ['', Validators.required],
        customerId : ['', Validators.required]
      }
    );

  }
  ngOnInit() {
    this.init();
  }
  submit() {
    this.service.RegisterUser(this.registerform.value).subscribe(
      register => {
        this.registerform.reset();
        this.router.navigate(['/home']);
      }
    );
  }
  get customerName() {
    const userid = this.registerform.get('customerName');
    return userid;
  }
  get password() {
    return this.registerform.get('password');
  }
  get email() {
    const userid = this.registerform.get('email');
    return userid;
  }
  get age() {
    return this.registerform.get('age');
  }
  get addressId() {
    const userid = this.registerform.get('addressId');
    return userid;
  }
  get customerId() {
    return this.registerform.get('customerId');
  }
}

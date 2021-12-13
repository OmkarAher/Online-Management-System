import { CustomValidators } from './../adminid.validators';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';

import { LoginService } from './../service/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Session } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg: string;
  loginform = new FormGroup({
    adminId : new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(4),

    ]),
    password : new FormControl('', [
      Validators.required,
      Validators.minLength(4),

    ])

  });
  constructor(private services: LoginService,
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private service: CookieService) { }

  ngOnInit() {

    // this.http.get<any>(this.url).subscribe(data => { console.log(data)
    // this.post = data})

  }
  onSubmit() {
    this.services.loginUser(this.loginform.value).subscribe(User => {
        if (User != null) {
          // sessionStorage.setItem("admin",User);
          this.service.set('admin', User);
        this.loginform.reset();
        this.router.navigate(['/adminhome']);
        } else {
          this.loginform.reset();
          this.msg = 'Provide proper AdminId and Password';


        }
      });
  }
  get adminId() {
   return this.loginform.get('adminId');
  }
  get password() {
    return this.loginform.get('password');
  }

}

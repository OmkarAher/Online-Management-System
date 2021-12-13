import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from './../service/customer.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {
  msg;

  constructor(private services: CustomerService,
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private service: CookieService) { }

  ngOnInit() {

  }
  passwordform = new FormGroup({
    password : new FormControl('', [
      Validators.required,
      Validators.minLength(4),

    ]),
    newPassword : new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      

    ])

  });

  onSubmit() {
    this.services.updatePassword(this.passwordform.value).subscribe(User => {
        if (User) {
          // sessionStorage.setItem("admin",User);
        this.passwordform.reset();
        this.router.navigate(['/customerHome']);
        } else {
          this.passwordform.reset();
          this.msg = 'Provide proper Password';


        }
      });
  }
  get password() {
    return this.passwordform.get('password');
   }
   get newPassword() {
     return this.passwordform.get('newPassword');
   }

}

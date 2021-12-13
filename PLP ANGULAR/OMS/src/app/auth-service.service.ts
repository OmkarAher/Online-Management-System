import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private router: Router,
    private service: CookieService) { }
customer = {};
customerArr = [];
id;

  isUserLoggedIn() {
    // let user = sessionStorage.getItem('admin')
    const user = this.service.check('admin');

    if (user) {
      return true;
    } else {
      this.router.navigate(['home']);
      return false;
    }
  }

  logOut() {
    // sessionStorage.removeItem('admin');
    this.service.delete('admin');
    this.router.navigate(['home']);
  }
  isCustomerLoggedIn() {
    // let user = sessionStorage.getItem('admin')
    const user = this.service.check('customer');
    // this.customer = this.service.get("customer");
    // this.customerArr = Object.values(this.customer);
    if (user) {
      return true;
    } else {
      this.router.navigate(['customerLogin']);
      return false;
    }
  }

  customerlogOut() {
    // sessionStorage.removeItem('admin');
    this.service.delete('customer');
  }


}

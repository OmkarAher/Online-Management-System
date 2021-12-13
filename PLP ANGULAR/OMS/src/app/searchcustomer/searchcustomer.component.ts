import { GetAllCustomersComponent } from './../get-all-customers/get-all-customers.component';
import { LoginService } from './../service/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchcustomer',
  templateUrl: './searchcustomer.component.html',
  styleUrls: ['./searchcustomer.component.css']
})
export class SearchcustomerComponent implements OnInit {

  searchform: FormGroup;
  cus = [];
  customer = {};
  msg: string;
  remove: string;
  url: string;
  state;
  constructor(private http: HttpClient,
    private router: Router,
    private fb: FormBuilder,
    private services: LoginService,
    ) { }

    init() {
      this.searchform = this.fb.group(
        {
          customerId: ['', Validators.required]
        }
      );
    }

  ngOnInit() {
    this.init();
  }
  onSearch() {
    this.services.searchCustomer(this.searchform.value).subscribe(data => {
        if (data != null) {
        this.searchform.reset();

        this.customer = data;
        console.log(data);
        this.msg = '';
        this.remove = 'Remove';
        this.state = true;
        return true;
        } else {
          this.msg = 'Cant Find Customer By provided Id';
          this.remove = '';
          this.router.navigate(['/searchCustomer']);
          alert(this.msg);
          return false;
        }
      });
  }
  removeCustomer(customer) {
    this.cus = Object.values(customer);
    const id = this.cus[0];
    this.url = 'http://localhost:8080/customer/deleteCustomer/' + id;
    this.http.delete<any>(this.url).subscribe(data => {
        console.log(data);
        this.router.navigate(['/adminhome']);
      });
  }

  get customerId() {
   return this.searchform.get('customerId');
  }
  hide() {
    if (this.state) {
      return true;
    }
  }

}

import { FormGroup } from '@angular/forms';
import { LoginService } from './../service/login.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-all-customers',
  templateUrl: './get-all-customers.component.html',
  styleUrls: ['./get-all-customers.component.css']
})
export class GetAllCustomersComponent implements OnInit {

  customer = {};
  posts = [];
  obj = [];
  removeform: FormGroup;
  id;
  msg: string;

  url = 'http://localhost:8080/admin/allCustomers';
  delurl = 'http://localhost:8080/customer/deleteCustomer/';
  constructor(private http: HttpClient,
    private service: LoginService,
    private router: Router) { }
  removeCustomer(post) {
    const index = this.posts.indexOf(post);
    console.log(index);
    console.log(this.posts[index]);
    this.customer = this.posts[index];
    this.obj = Object.values(this.customer);
    console.log(this.obj);
     this.id = this.obj[0];
     this.http.delete<any>(this.delurl + this.id).subscribe(data => {
        console.log(data);
      });
      this.posts.splice(index, 1);
  }

  ngOnInit() {
    this.http.get<any>(this.url).subscribe(data => {
      console.log(data);
      if (data != null) {
      this.posts = data;
      return true;
      } else {
        this.msg = 'No Customers Found';
        return false;
      }
    });
  }
  get removebtn() {
    return this.http.get('removebtn');
  }


}

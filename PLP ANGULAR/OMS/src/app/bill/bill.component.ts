import { CustomerService } from './../service/customer.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  url = 'http://localhost:8080/customer/searchCart/';
  posts = {};
  cart = [];

  customerId;
  orderId: any;
  remove: string;
  state;

  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router, private service: CustomerService
    ) {
   }

  ngOnInit() {
    this.submit();
  }
  submit() {
    this.customerId = this.service.id;
    console.log(this.customerId);
    console.log(this.service.id);

    console.log(this.customerId);
    this.http.get<any>(this.url + this.service.cartId).subscribe(data => {
      console.log(this.service.cartId);
      console.log(data);
      this.posts = data;
      this.state = true;
      console.log(this.state);
      this.remove = 'remove';
      console.log(this.posts);
    });


  }

}

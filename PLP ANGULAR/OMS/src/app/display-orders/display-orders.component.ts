import { Router } from '@angular/router';
import { CustomerService } from './../service/customer.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-orders',
  templateUrl: './display-orders.component.html',
  styleUrls: ['./display-orders.component.css']
})
export class DisplayOrdersComponent implements OnInit {
  customer = {};
  posts = [];
  obj = [];
  id;
  msg: string;
  url = 'http://localhost:8080/order/displayOrder/';
  delurl = 'http://localhost:8080/order/cancelOrder/';
  constructor(private http: HttpClient,
    private service: CustomerService,
    private router: Router) { }

  ngOnInit() {
    console.log(this.service.id);
    this.http.get<any>(this.url + this.service.id).subscribe(data => {
      console.log(data);
      if (data != null) {
      this.posts = data;
      return true;
      } else {
        this.msg = 'No Order Found';
        return false;
      }
    });
  }
  cancelOrder(post) {
    const index = this.posts.indexOf(post);
    console.log(index);
    console.log(this.posts[index]);
    this.customer = this.posts[index];
    this.obj = Object.values(this.customer);
    console.log(this.obj);
     this.id = this.obj[0];
     this.http.delete<any>(this.delurl + this.id + '/' + this.service.id).subscribe(data => {
        console.log(data);
      });
      this.posts.splice(index, 1);
  }

}

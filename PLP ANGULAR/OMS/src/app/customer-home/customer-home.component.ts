import { FormGroup } from '@angular/forms';
import { CustomerLoginComponent } from './../customer-login/customer-login.component';
import { Router } from '@angular/router';
import { CustomerService } from './../service/customer.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent implements OnInit {
  url = 'http://localhost:8080/admin/searchallproduct';
  addurl = 'http://localhost:8080/customer/addToCart/';
 searchurl= 'http://localhost:8080/admin/searchproductbykeyword/';
  productsearch;
  msg;
  posts = [];
  images=[];
  productId;
  customerId;
  product1= {};
  state=false;
  searchproductnameform: FormGroup;

  constructor(private http: HttpClient,
    private cookies: CookieService,
    private service: CustomerService,
    private router: Router,
    ) { }

  ngOnInit() {
  
    this.http.get<any>(this.url).subscribe(data => {
      console.log(data);
      if (data != null) {
      this.productsearch = data;
      return true;
      } else {
        this.msg = 'No Products Found';
        return false;
      }
    });
  }
  addToCart(product) {
    this.customerId = this.service.id;
    this.posts = Object.values(product);
    this.productId = this.posts[0];
    console.log(this.productId);
    this.http.get<any>(this.addurl + this.productId + '/' + this.customerId).subscribe(data => {
        this.router.navigate(['customerHome']);

      });

  }
  product(e) {
    this.product1 = e.target.value;
    // console.log(e.target.value);
  }

  onsubmit() {
    console.log(this.product1);
    this.http.get<any>(this.searchurl + this.product1).subscribe(data => {
      console.log(data);
      this.productsearch = data;
      console.log(this.productsearch);

      if (data >= this.productsearch[0]) {
        this.state = true;
        
        this.msg = '';
        this.router.navigate(['/customerHome']);

      } else {
        console.log(data);
      
        this.msg = 'No product availiable for this name';
      }
    });
  }
  show() {
    if (this.state) {
      return true;
    }
  }

}

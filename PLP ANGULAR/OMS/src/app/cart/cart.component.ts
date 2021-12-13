import { CustomerService } from './../service/customer.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router, private service: CustomerService
    ) {
   }

  posts = {};
  cart = [];

  customerId;
  orderId: any;
  remove: string;
  state;



  url = 'http://localhost:8080/cart/displayCart/';
  upurl = 'http://localhost:8080/customer/removeFromCart/';

  post = '';
  searchcartform: FormGroup;
    color = 'red';

  ngOnInit() {
    this.init();
    this.customerId = this.service.id;
    console.log(this.customerId);
    console.log(this.service.id);

    console.log(this.customerId);
    this.http.get<any>(this.url + this.customerId).subscribe(data => {
      if (data.cartId != 0 ) {
      console.log(data.cartId);
      this.service.cartId = data.cartId;
      console.log(this.service.cartId);
      console.log('cartId' + this.service.cartId);
      console.log(data);
      this.posts = data;
      console.log(this.posts);
      this.state = true;
      console.log(this.state);
      this.remove = 'remove';
      console.log(this.posts);
      }
      else{
        this.state = false;
        alert('Cart is Empty');
      }
    });

  }

  display(e) {
    this.customerId = e.target.value;
    this.orderId = e.target.value;

  }

  init() {

    this.searchcartform = this.fb.group({

      customerId: ['', Validators.required]

    }
    );
    // this.submit();



  }
  // submit()
  // {
  //   this.customerId = this.service.id;
  //   console.log(this.customerId);
  //   console.log(this.service.id);

  //   console.log(this.customerId);
  //   this.http.get<any>(this.url+this.customerId).subscribe(data => {
  //     console.log(data.cartId);
  //     this.service.cartId = data.cartId;
  //     console.log(this.service.cartId);
  //     console.log('cartId'+this.service.cartId);
  //     console.log(data);
  //     this.posts = data;
  //     this.state=true;
  //     console.log(this.state)
  //     this.remove="remove";
  //     console.log(this.posts);
  //   })


  // }
  show() {
    if (this.state) {
      return true;
    }
  }
  removeProduct(posts) {
    this.cart = Object.values(posts);
    posts.product1Id;
    if (posts.product1Id != 0) {
    console.log(posts.product1Id);
    console.log(this.customerId);
    this.http.get<any>(this.upurl + posts.product1Id + '/' + this.customerId).subscribe(data => {
        console.log(data);
        this.router.navigate(['customerHome']);
      });
    } else if (posts.product2Id != 0) {
      console.log(posts.product1Id);
    console.log(this.customerId);
    this.http.get<any>(this.upurl + posts.product2Id + '/' + this.customerId).subscribe(data => {
        console.log(data);
        this.router.navigate(['customerHome']);
      });
    } else if (posts.product3Id != 0) {
      console.log(posts.product3Id);
    console.log(this.customerId);
    this.http.get<any>(this.upurl + posts.product3Id + '/' + this.customerId).subscribe(data => {
        console.log(data);
        this.router.navigate(['customerHome']);
      });
    } else {
      alert('cart is Empty');
    }


    }
    placeOrder() {
      this.router.navigate(['payment']);
    }

}

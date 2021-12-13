import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cancel-order',
  templateUrl: './cancel-order.component.html',
  styleUrls: ['./cancel-order.component.css']
})
export class CancelOrderComponent implements OnInit {

  posts = {};
  customerId: any;
  orderId: any;

  url = 'http://localhost:8080/order/cancelOrder/';
  cancelOrderform: FormGroup;


  constructor(private http: HttpClient, private fb: FormBuilder) { }

  ngOnInit() {

    this.init();
  }
  displayOrderId(e) {
    this.orderId = e.target.value;
    console.log(this.orderId);



  }

  displayCustomerId(e) {
    this.customerId = e.target.value;
    console.log(this.customerId);

  }

  init() {
    this.cancelOrderform = this.fb.group([
      this.customerId = ['', Validators.required],
      this.orderId = ['', Validators.required]
    ]);
  }
  submit() {
    this.http.delete<any>(this.url + this.orderId + '/' + this.customerId).subscribe(data => {
      console.log(data);
      this.posts = data;

      console.log(this.posts);
    });


  }

}

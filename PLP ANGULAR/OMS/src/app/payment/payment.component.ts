import { CustomerService } from './../service/customer.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(  private service: LoginService,
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private services: CustomerService) { }
    get CardNumber() {
      return this.paymentform.get('CardNumber');
    }

    get cvv() {
      return this.paymentform.get('cvv');
    }

    get expirydate() {
      return this.paymentform.get('expirydate');
    }

     get f() {
       return this.paymentform.controls;
   }

  url = 'http://localhost:8080/customer/placeOrder/';
  istrue = false;
  order = {};
  valid;
  msg = '';


  paymentform = new FormGroup({
    CardNumber: new FormControl('', [
        Validators.required,
        Validators.maxLength(16)

      ]),
      cvv : new FormControl('', [
         Validators.required,
         Validators.maxLength(3)
        ]),
        expirydate: new FormControl('', [
          Validators.required,
          Validators.maxLength(4)
        ])
    });

  ngOnInit() {
  }

    check(e) {
      this.valid = e.target.value;
    }

    show() {
      const ccNum = this.valid;

      const visaRegEx = RegExp('4[1-9]{14}');
      const masterRegEx = RegExp('5[1-9]{14}');
      const creditRegEx = RegExp('3[1-9]{14}');
      if (visaRegEx.test(ccNum)) { // Visa validation
         this.msg = 'Visa Card';
         this.istrue = true;
         return true;
          }
          if (masterRegEx.test(ccNum)) { // Master validation
             this.msg = 'Master Card';
             this.istrue = true;
             return true;
              }
              if (creditRegEx.test(ccNum)) { // Credit validation
                 this.msg = 'Rupay Card';
                 this.istrue = true;
                 return true;

                  } else {
                    this.msg = 'Invalid Card';
                    this.istrue = false;
                    return true;
                  }
    }

   onSubmit() {
    if (this.istrue) {

this.http.get(this.url + this.services.cartId).subscribe(data => {
    console.log(data);
    this.order = data;
  });
this.router.navigate(['bill']);


    } else {

      window.alert('Provide proper card details');

    }


}
}

















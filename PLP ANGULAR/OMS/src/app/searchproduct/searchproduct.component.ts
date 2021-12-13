import { Custom } from './../../username.validators';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './../service/login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchproduct',
  templateUrl: './searchproduct.component.html',
  styleUrls: ['./searchproduct.component.css']
})
export class SearchproductComponent implements OnInit {

  constructor(private service: LoginService,
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
    ) {  }


  get productId() {
    return this.searchproductform.get('productId');
  }

  get removebtn() {
    return this.http.get('removebtn');
  }


  product: any;
  msg: string;
  productsearch = {};
  productarray = [];
  id;

  state = false;



  url = 'http://localhost:8080/admin/searchproduct/';
  delurl = 'http://localhost:8080/admin/deleteproduct/';


  searchproductform: FormGroup;



  prod(e) {
    this.product = e.target.value;
    // console.log(e.target.value);
  }

    ngOnInit() {

      this.init();
    }

    init() {

    this.searchproductform = this.fb.group(
      {
    productId: ['', Validators.required]
      }
    );
  }


  submit() {
    console.log(this.product);
    this.http.get<any>(this.url + this.product).subscribe(data => {
      console.log(data);


      console.log(this.productsearch);
      if (data == null) {
        this.searchproductform.reset();
        this.msg = 'Cant Find Product By product Id';
      } else {
        this.state = true;
        this.searchproductform.reset();
        this.productsearch = data;
        this.productarray = Object.values(this.productsearch);
        this.msg = '';
        this.router.navigate(['/searchproduct']);

      }
    });
  }

  removeCustomer() {
    this.id = this.productarray[0];
    console.log(this.productarray[0]);
    this.http.delete<any>(this.delurl + this.id).subscribe(data => {
        this.router.navigate(['/adminhome']);
        console.log(data);
      });

  }
  show() {
    if (this.state) {
      return true;
    }
  }











}

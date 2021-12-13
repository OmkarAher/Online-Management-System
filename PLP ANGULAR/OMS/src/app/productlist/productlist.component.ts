import { HttpClient } from '@angular/common/http';
import { LoginService } from './../service/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  product: any;
  msg: string;
  productsearch;
  obj = [];

  id;

  url = 'http://localhost:8080/admin/searchallproduct';
  delurl = 'http://localhost:8080/admin/deleteproduct/';

  constructor(private service: LoginService,
    private http: HttpClient,
    private router: Router) { }

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

  removeProduct(product) {
    const index = this.productsearch.indexOf(product);
    console.log(index);
    console.log(this.productsearch[index]);
    this.product = this.productsearch[index];
    this.obj = Object.values(this.product);
    console.log(this.obj);
     this.id = this.obj[0];
     this.http.delete<any>(this.delurl + this.id).subscribe(data => {
        console.log(data);
      });
      this.productsearch.splice(index, 1);
  }

  get removebtn() {
    return this.http.get('removebtn');
  }

}

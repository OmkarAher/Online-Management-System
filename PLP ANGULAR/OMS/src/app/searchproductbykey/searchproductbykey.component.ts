import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './../service/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchproductbykey',
  templateUrl: './searchproductbykey.component.html',
  styleUrls: ['./searchproductbykey.component.css']
})
export class SearchproductbykeyComponent implements OnInit {
  product: any;
  msg: string;
  productsearch;
  state = false;
  url = 'http://localhost:8080/admin/searchproductbykeyword/';

  searchproductnameform: FormGroup;

  constructor(private service: LoginService,
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
    ) {  }

  ngOnInit() {
    this.init();
  }

  prod(e) {
    this.product = e.target.value;
    // console.log(e.target.value);
  }

  init() {

    this.searchproductnameform = this.fb.group(
      {
        productname: ['', Validators.required]
      }
    );
  }

  submit() {
    console.log(this.product);
    this.http.get<any>(this.url + this.product).subscribe(data => {
      console.log(data);
      this.productsearch = data;
      console.log(this.productsearch);

      if (data >= this.productsearch[0]) {
        this.state = true;
        this.searchproductnameform.reset();
        this.msg = '';
        this.router.navigate(['/searchproductbykey']);

      } else {
        console.log(data);
        this.searchproductnameform.reset();
        this.msg = 'No product availiable for this name';
      }
    });
  }

  get productname() {
    return this.searchproductnameform.get('productname');
  }

  show() {
    if (this.state) {
      return true;
    }
  }



}

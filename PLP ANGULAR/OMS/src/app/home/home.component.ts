import { LoginService } from './../service/login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

imagesUrl = [];
images = [];
product1: any;
  msg: string;
  productsearch;
  state = false;
  url = 'http://localhost:8080/admin/searchproductbykeyword/';

  searchproductnameform: FormGroup;
init() {
  this.searchproductnameform = this.fb.group(
    {
      productname: ['', Validators.required]
    }
  );
}
  ngOnInit() {
    this.images = ['assets/background_home2 (1).jpg',
    'assets/background_home2 (2).jpg',
    'assets/3.jpg','assets/1.jpg', 'assets/2.jpg'
 ]
    this.imagesUrl = ['assets/1.jpg', 'assets/2.jpg', 'assets/3.jpg'];
    this.init();

  }
  constructor(private service: LoginService,
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient) {}
  product(e) {
    this.product1 = e.target.value;
    // console.log(e.target.value);
  }
  navigateRegister() {
    this.router.navigate(['register']);
  }
  navigateLogin() {
    this.router.navigate(['customerLogin']);
  }
  navigateAdminLogin()
  {
    this.router.navigate(['login'])
  }
  submit() {
    console.log(this.product1);
    this.http.get<any>(this.url + this.product1).subscribe(data => {
      console.log(data);
      this.productsearch = data;
      console.log(this.productsearch);

      if (data >= this.productsearch[0]) {
        this.state = true;
        console.log(this.state)
        this.searchproductnameform.reset();
        this.msg = '';
        this.router.navigate(['/home']);

      } else {
        console.log(data);
        this.searchproductnameform.reset();
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

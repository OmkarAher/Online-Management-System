import { LoginService } from './../service/login.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  addproductform: FormGroup;
  constructor(private service: LoginService,
    private fb: FormBuilder,
    private router: Router) { }

    init() {
      this.addproductform = this.fb.group(
        {
          productName: ['', Validators.required],
          category: ['', Validators.required],
          quantity: ['', Validators.required],
          price: ['', Validators.required],
          description: ['', Validators.required],
          searchKeyword: ['', Validators.required]
        }
      );
    }


  ngOnInit() {
    this.init();
  }

  submit() {
    this.service.addProduct(this.addproductform.value).subscribe(
      add => {
        this.addproductform.reset();
        this.router.navigate(['/adminhome']);
      }
    );
  }

  get productName() {
    return this.addproductform.get('productName');
  }

  get category() {
    return this.addproductform.get('category');
  }

  get quantity() {
    return this.addproductform.get('quantity');
  }

  get price() {
    return this.addproductform.get('price');
  }

  get description() {
    return this.addproductform.get('description');
  }

  get searchKeyword() {
    return this.addproductform.get('searchKeyword');
  }

}

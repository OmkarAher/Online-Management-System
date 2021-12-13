import { LoginService } from './../service/login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {

  updateproductform: FormGroup;
  constructor(private service: LoginService,
    private fb: FormBuilder,
    private router: Router) { }

    init() {
      this.updateproductform = this.fb.group(
        {
          productId: ['', Validators.required],
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
    this.service.updateProduct(this.updateproductform.value).subscribe(
      add => {
        this.updateproductform.reset();
        this.router.navigate(['/adminhome']);
      }
    );
  }

  get productId() {
    return this.updateproductform.get('productId');
  }

  get productName() {
    return this.updateproductform.get('productName');
  }

  get category() {
    return this.updateproductform.get('category');
  }

  get quantity() {
    return this.updateproductform.get('quantity');
  }

  get price() {
    return this.updateproductform.get('price');
  }

  get description() {
    return this.updateproductform.get('description');
  }

  get searchKeyword() {
    return this.updateproductform.get('searchKeyword');
  }

}

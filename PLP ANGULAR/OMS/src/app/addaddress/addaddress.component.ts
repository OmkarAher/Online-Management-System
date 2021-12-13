import { CustomerService } from './../service/customer.service';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addaddress',
  templateUrl: './addaddress.component.html',
  styleUrls: ['./addaddress.component.css']
})
export class AddaddressComponent implements OnInit {


addaddress: FormGroup;
submitted = false;

constructor(
    private formBuilder: FormBuilder,
    private service: CustomerService,
    private router: Router
    ) { }

ngOnInit() {
    this.addaddress = this.formBuilder.group({
        // customerId: ['', Validators.required],
       apartment: ['', Validators.required],
       street: ['', Validators.required],
       city: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.maxLength(6), Validators.minLength(6)]],
        state: ['', [Validators.required]]

    });
}



  // get customerId() {
  //   return this.addaddress.get('customerId');
  // }

  get apartment() {
    return this.addaddress.get('apartment');
  }
  get street() {
    return this.addaddress.get('street');
  }

  get city() {
    return this.addaddress.get('city');
  }

  get state() {
    return this.addaddress.get('state');
  }

// convenience getter for easy access to form fields
get f() { return this.addaddress.controls; }

onSubmit() {
    this.service.addAddress(this.addaddress.value).subscribe(() => {
        this.addaddress.reset();
        window.alert('Registration Successfull');
        this.router.navigate(['./customerLogin']);
       // this.router.navigate(['./login']);
      });
    }


//     this.submitted = true;

//     // stop here if form is invalid
//     if (this.addaddress.invalid) {
//         return;
//     }

//     alert('SUCCESS!! :-)')
// }
}




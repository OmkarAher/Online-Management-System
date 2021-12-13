import { CustomerService } from './../service/customer.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-updateaddress',
  templateUrl: './updateaddress.component.html',
  styleUrls: ['./updateaddress.component.css']
})
export class UpdateaddressComponent implements OnInit {
  updateaddress: FormGroup;
submitted = false;

constructor(
  private formBuilder: FormBuilder,
  private service: CustomerService,
  private router: Router


  ) { }

ngOnInit() {
    this.updateaddress = this.formBuilder.group({
      // customerId: ['', Validators.required],
      apartment: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
     pincode: ['', [Validators.required, Validators.maxLength(6), Validators.minLength(6)]],
       state: ['', [Validators.required]]


    });
}
// get customerId() {
//   return this.updateaddress.get('customerId');
// }

get apartment() {
  return this.updateaddress.get('apartment');
}
get street() {
  return this.updateaddress.get('street');
}

get city() {
  return this.updateaddress.get('city');
}

get state() {
  return this.updateaddress.get('state');
}


// convenience getter for easy access to form fields
get f() { return this.updateaddress.controls; }

onSubmit() {
  this.service.updateAddress(this.updateaddress.value).subscribe(() => {

    this.updateaddress.reset();
    window.alert('updated Successfull');
    this.router.navigate(['./customerHome']);
   // this.router.navigate(['./login']);
  });
}

}








import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customer = {};
customerArr = [];
id;
cartId;
  baseUrl = 'http://localhost:8080';

// Dependency Injection // it should be written inside constructor
  constructor(private http: HttpClient,
    private service: CookieService) { }


  loginCustomer(body): Observable<any> {
    return this.http.post(`${this.baseUrl}/customer/loginCustomer`, body);
  }
  registerUser(body):  Observable<any> {
    return this.http.post(`${this.baseUrl}/customer/registerCustomer`, body);
}

updateCustomer(body): Observable<any> {
  return this.http.put(`${this.baseUrl}/customer/updateCustomer/`+this.id, body);
}
updatePassword(body): Observable<any> {
  return this.http.put(`${this.baseUrl}/customer/updatePassword/`+this.id, body);
}

addAddress(body): Observable<any> {
  return this.http.post(`${this.baseUrl}/customer/addAddress/`+this.id, body);
}

updateAddress(body): Observable<any> {
  return this.http.put(`${this.baseUrl}/customer/updateAddress/`+this.id, body);
}
validateCard(body): Observable<any> {
  return this.http.post(`${this.baseUrl}/card/validate`, body);
    }
getCustomerId(id) {
  this.id = id;
  return this.id;
}
getCartId(cartId) {
  this.cartId = cartId;
  return this.cartId;
}

}

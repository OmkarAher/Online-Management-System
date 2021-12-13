import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

    baseUrl = 'http://localhost:8080';

    constructor(private http: HttpClient) {}
    public loginUser(body): Observable<any> {
      return this.http.post(`${this.baseUrl}/admin/adminLogin`, body);
    }

    public RegisterUser(body): Observable<any> {
      return this.http.post(`${this.baseUrl}/customer/create`, body);
    }
    public searchCustomer(body): Observable<any> {
      return this.http.post(`${this.baseUrl}/customer/searchCustomer`, body);
    }

    public addProduct(body): Observable<any> {
      return this.http.post(`${this.baseUrl}/admin/addproduct`, body);
    }

    public updateProduct(body): Observable<any> {
      return this.http.put(`${this.baseUrl}/admin/updateproduct`, body);
    }


  }


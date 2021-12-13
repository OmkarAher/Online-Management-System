import { PaymentComponent } from './payment/payment.component';
import { CartComponent } from './cart/cart.component';
import { CancelOrderComponent } from './cancel-order/cancel-order.component';
import { AddaddressComponent } from './addaddress/addaddress.component';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';
import { SearchcustomerComponent } from './searchcustomer/searchcustomer.component';
import { GetAllCustomersComponent } from './get-all-customers/get-all-customers.component';
import { AdminsidebarComponent } from './adminsidebar/adminsidebar.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import {SliderModule} from 'angular-image-slider';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LogoutComponent } from './logout/logout.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { AddproductComponent } from './addproduct/addproduct.component';
import { SearchproductComponent } from './searchproduct/searchproduct.component';
import { SearchproductbykeyComponent } from './searchproductbykey/searchproductbykey.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { FooterComponent } from './footer/footer.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { UpdateaddressComponent } from './updateaddress/updateaddress.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { BillComponent } from './bill/bill.component';
import { DisplayOrdersComponent } from './display-orders/display-orders.component';
import { CustomerLogoutComponent } from './customer-logout/customer-logout.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    AboutusComponent,
    LogoutComponent,
    ProductlistComponent,
    SignupComponent,
    HomeComponent,
    AdminhomeComponent,
    AdminsidebarComponent,
    GetAllCustomersComponent,
    SearchcustomerComponent,
    LogoutComponent,
    AddproductComponent,
    SearchproductComponent,
    SearchproductbykeyComponent,
    UpdateproductComponent,
    FooterComponent,


    // customer

    CustomerRegisterComponent,
    CustomerLoginComponent,
    UpdateprofileComponent,
    AddaddressComponent,
    UpdateaddressComponent,
    CustomerHomeComponent,

    // cart

    CartComponent,
    CancelOrderComponent,

    // payment
    PaymentComponent,

    BillComponent,

    DisplayOrdersComponent,

    CustomerLogoutComponent,

    UpdatePasswordComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path : 'home', component: HomeComponent},
      {path : 'login', component: LoginComponent},
      {path : 'signup', component: SignupComponent},
      {path : 'about', component: AboutusComponent},
      {path : 'getAllCustomers', component: GetAllCustomersComponent},
      {path : 'searchCustomer', component: SearchcustomerComponent},
      {path : 'adminhome', component: AdminhomeComponent},
      {path : 'logout', component: LogoutComponent},
      {path : 'addproduct', component: AddproductComponent },
      {path : 'searchproduct', component: SearchproductComponent},
      {path : 'searchproductbykey', component: SearchproductbykeyComponent},
      {path : 'getAllProducts', component: ProductlistComponent},
      {path : 'updateproduct', component: UpdateproductComponent},
      {path: 'customerLogout', component: CustomerLogoutComponent},


      // customer
      {path: 'register', component: CustomerRegisterComponent},
       {path: 'customerLogin', component: CustomerLoginComponent},

       {path: 'update', component: UpdateprofileComponent},
       {path: 'addAddress', component: AddaddressComponent},
       {path: 'updateAddress', component: UpdateaddressComponent},
       {path : 'customerHome', component: CustomerHomeComponent},
       {path:'updatePassword',component:UpdatePasswordComponent},


       // cart
       {path : 'cancelOrder', component: CancelOrderComponent},
       {path : 'cart', component: CartComponent},
        {path : 'payment', component : PaymentComponent},
        {path: 'bill', component: BillComponent},
        {path: 'getorders', component: DisplayOrdersComponent}




    ]), FormsModule, ReactiveFormsModule, SliderModule, BrowserAnimationsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

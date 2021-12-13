import { Router } from '@angular/router';
import { AuthServiceService } from './../auth-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-logout',
  templateUrl: './customer-logout.component.html',
  styleUrls: ['./customer-logout.component.css']
})
export class CustomerLogoutComponent implements OnInit {

  constructor(private service: AuthServiceService,
    private router: Router) { }

  ngOnInit() {
    this.service.customerlogOut();
    this.router.navigate(['home']);
  }

}

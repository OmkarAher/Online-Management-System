import { AuthServiceService } from './../auth-service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private router: Router,
    private service: AuthServiceService) {

   }

  ngOnInit() {
  }
  displayCart() {
    this.router.navigate(['cart']);

  }
  customerLogout() {
    this.router.navigate(['customerLogout']);
  }

}

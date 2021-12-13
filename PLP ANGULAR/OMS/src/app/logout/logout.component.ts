import { AuthServiceService } from './../auth-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private service: AuthServiceService,
    private router: Router
    ) { }

  ngOnInit() {
    this.service.logOut();
    this.router.navigate(['/home']);

  }

}

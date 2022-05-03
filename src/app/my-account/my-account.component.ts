import { Router } from '@angular/router';
import { AuthService } from './../account/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  constructor(private authService:AuthService,
    private router:Router) { }

  ngOnInit(): void {
  }
  logOut(){
this.authService.logOut()
this.router.navigate(['/sign'])
  }
}

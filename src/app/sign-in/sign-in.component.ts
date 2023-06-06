import { Router } from '@angular/router';
import { AuthResponse } from './../account/auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, Input, OnInit, Output } from '@angular/core';
import { AuthService } from '../account/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  isLogged=false
  error:string=''
loginForm = new FormGroup({
  email:new FormControl(''),
  password:new FormControl('')
})
  constructor( private authService:AuthService,
    private router:Router) { }

  ngOnInit(): void {
  }
  login(){
const email = this.loginForm.value.email
const password = this.loginForm.value.password
let authObserv: Observable<AuthResponse>
authObserv= this.authService.login(email,password)
authObserv.subscribe(
 resData=>{
 this.router.navigate(['/my-account/overview'])
 this.isLogged=true
    },
    errorMessage=>{


      this.error=errorMessage

    })
  this.loginForm.reset()
  }
}

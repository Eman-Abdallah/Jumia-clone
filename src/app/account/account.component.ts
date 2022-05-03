import { Router } from '@angular/router';
import { AuthService, AuthResponse } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {


  error:string=''
signForm=new FormGroup({
  fName:new FormControl('',Validators.required),
  lName:new FormControl('',Validators.required),
  email:new FormControl('',[Validators.required,Validators.email]),
  password: new FormControl('',[Validators.required,Validators.minLength(6)] ),
  phone:new FormControl(),
  select: new FormControl()
}

)
  constructor(private authService:AuthService,
    private router:Router) { }

  ngOnInit(): void {
  }
  create(){
const email = this.signForm.value.email
const password = this.signForm.value.password
let authObservable :Observable<AuthResponse>
authObservable= this.authService.signUp(email,password)
const userDetails = this.signForm.value
localStorage.setItem('userDetails',JSON.stringify(userDetails))
authObservable.subscribe(
  resData=>{
    this.router.navigate(['/sign'])
  },
  errorMessage=>{
    this.error=errorMessage
  })
this.signForm.reset()

  }
}

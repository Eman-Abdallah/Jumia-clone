import { Router } from '@angular/router';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../account/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit , OnDestroy{
  public isCollapsed = false;
  isAuthenticated = false
  name:string=''
 userSub: Subscription = new Subscription;
  constructor(private authService:AuthService,
    private router:Router) { }

  ngOnInit(): void {
    this.authService.autoLogin();
    this.userSub= this.authService.subject.subscribe(user=>{

      if(user._token ===""||user._token==null){
        this.isAuthenticated=false;

      }else{

        this.isAuthenticated=true;
        const userData=localStorage.getItem('userDetails')
        if(!userData){
return
        }this.name=JSON.parse(userData).fName
      }
  })
}



ngOnDestroy(): void {
  this.userSub.unsubscribe()
}
}

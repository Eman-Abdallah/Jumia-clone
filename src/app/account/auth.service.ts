import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError, tap, BehaviorSubject } from 'rxjs';
import { User } from './user.model';

export interface AuthResponse{
  idToken:string,
  email:string,
  refreshToken:string,
  expiresIn:string,
  localId:string,
  registered?:boolean
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new User();
  activeTimer:any
  subject :BehaviorSubject<User>=new BehaviorSubject<User>(this.user)
  constructor(private http:HttpClient,
    private router:Router) { }


    signUp(email:string,password:string){
      return  this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCrmV8zzzI4_vPS_xZ6MhQCUURlnziJD70',{email:email,
      password:password,
      returnSecureToken:true})
      .pipe(catchError(this.handelError),tap(resData=>{
      this.handelAuth(
        resData.email,
         resData.localId
         ,resData.idToken,
       +resData.expiresIn)
      })
      )


   }

   login(email:string,password:string){
    return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCrmV8zzzI4_vPS_xZ6MhQCUURlnziJD70',{
  email:email,
  password:password,
  returnSecureToken:true
}
)
.pipe(
  catchError(this.handelError)
  ,tap(resData=>{
  this.handelAuth(
    resData.email,
     resData.localId
     ,resData.idToken,
   +resData.expiresIn)
  }
  )
  )
  }
   private handelError(errorRes:HttpErrorResponse){
    let errorMessage='An unkown error occurred !'

    if(!errorRes.error || !errorRes.error.error){
      return throwError(errorMessage)
    }
    switch(errorRes.error.error.message){
      case 'EMAIL_EXISTS':
        errorMessage='This email exist already'
        break
        case 'EMAIL_NOT_FOUND':
        errorMessage='This email is not found'
        break
        case 'INVALID_PASSWORD':
          errorMessage='this password is invlaid'
          break
    }
    return throwError(errorMessage)
  }


  autoLogin(){

    const userDta=localStorage.getItem('userData')
   if(!userDta){
return
   }
const userInfo:{email:string,
  id:string,
_token:string,_tokenExpirationDate:Date
}= JSON.parse(userDta)
const loadedUser= new User()

loadedUser.email=userInfo.email
loadedUser.id=userInfo.id
loadedUser._token=userInfo._token
loadedUser._tokenExpirationDate=userInfo._tokenExpirationDate



if(loadedUser.token){

this.subject.next(loadedUser)
const expire= new Date(userInfo._tokenExpirationDate).getTime()-new Date().getTime()
this.autoLogout(expire)
}
  }


  autoLogout(expirationDuration:number){

    console.log(expirationDuration);
 this.activeTimer= setTimeout(()=>{
  this.logOut()
},expirationDuration)
  }

  logOut(){
    this.user._token=''
    this.subject.next(this.user)
    this.router.navigate(['./sign'])


    localStorage.removeItem('userData')
    if(this.activeTimer){
      clearTimeout(this.activeTimer)
    }
    this.activeTimer=null
  }

  private handelAuth(email:string,userId:string,token:string,expiresIn:number,){
    const expire = new Date(new Date().getTime() + +expiresIn * 1000)
    const user = new User();
    user.email=email;
    user.id=userId;
    user._token=token;
    user._tokenExpirationDate=expire;

      this.subject.next(user)
      this.autoLogout(expiresIn*1000)
      localStorage.setItem('userData',JSON.stringify(user))
  }

}

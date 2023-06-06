import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overwiew',
  templateUrl: './overwiew.component.html',
  styleUrls: ['./overwiew.component.css']
})
export class OverwiewComponent implements OnInit {
fName:string=''
lName:string=''
email:string=''
phone:string=''
gotAddress=false
address:string=''
region:string=''
city:string=''
  constructor() { }
  userData = localStorage.getItem('userDetails')
  addressData = localStorage.getItem('address')
  ngOnInit(): void {

    if(!this.userData){
      return
    }
this.fName=JSON.parse(this.userData).fName
console.log(this.fName);
this.lName=JSON.parse(this.userData).lName
console.log(this.fName);
this.email=JSON.parse(this.userData).email
this.phone=JSON.parse(this.userData).phone
console.log(this.email);
if(!this.addressData){
  return

}
this.gotAddress = true;
this.address=JSON.parse(this.addressData).address
this.region=JSON.parse(this.addressData).region
this.city=JSON.parse(this.addressData).city
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.css']
})
export class EditAddressComponent implements OnInit {
addData=false;
  fName:string=''
  lName:string=''
  phone:string=''
  address:string=''
  region:string=''
  city:string=''
  addressForm=new FormGroup({
    fName:new FormControl('',Validators.required),
    lName:new FormControl('',Validators.required),
    phone:new FormControl(),
    addPhone:new FormControl(),
    address:new FormControl(),
    addAddress:new FormControl(),
    region:new FormControl(),
    city: new FormControl()
  });
    constructor() { }
    userData = localStorage.getItem('userDetails');
    addressData = localStorage.getItem('address');
    ngOnInit(): void {

      if(!this.userData){
        return
      }
  this.fName=JSON.parse(this.userData).fName

  this.lName=JSON.parse(this.userData).lName

  this.phone=JSON.parse(this.userData).phone
  this.addressForm.patchValue({
    fName: this.fName,
    lName: this.lName,
   phone:this.phone
});

  if(!this.addressData){
    this.addData=false;
    return
  }
  this.addData=true;
  this.address=JSON.parse(this.addressData).address
this.region=JSON.parse(this.addressData).region
this.city=JSON.parse(this.addressData).city
  this.addressForm.patchValue({
    address: this.address,
    region: this.region,
   city:this.city
  });
    }



    edit(){
      this.addData=true;
const userDetails = this.addressForm.value
localStorage.setItem('address', JSON.stringify(userDetails));

    }
}

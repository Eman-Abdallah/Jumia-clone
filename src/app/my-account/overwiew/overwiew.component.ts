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
  constructor() { }
  userData = localStorage.getItem('userDetails')
  ngOnInit(): void {

    if(!this.userData){
      return
    }
this.fName=JSON.parse(this.userData).fName
console.log(this.fName);
this.lName=JSON.parse(this.userData).lName
console.log(this.fName);
this.email=JSON.parse(this.userData).email
console.log(this.email);

  }

}

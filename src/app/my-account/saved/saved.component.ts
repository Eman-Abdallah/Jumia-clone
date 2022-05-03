import { Product } from './../../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css']
})
export class SavedComponent implements OnInit {
  SavedProducts:Product[]=[]
  nomber!: number;
  constructor() { }

  ngOnInit(): void {

    const saved=localStorage.getItem('savedItems')
const n=localStorage.getItem('itemsN')


if(!saved ){
 return
}
this.SavedProducts=JSON.parse(saved)
if(!n){
  return
}this.nomber= JSON.parse(n)
  }

}

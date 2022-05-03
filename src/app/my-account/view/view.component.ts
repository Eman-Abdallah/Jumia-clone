import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product.model';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  viewedItems:Product[]=[]
  nomber!: number;
  constructor() { }

  ngOnInit(): void {

    const saved=localStorage.getItem('viewedItems')
const n=localStorage.getItem('itemsN')


if(!saved ){
 return
}
this.viewedItems=JSON.parse(saved)
if(!n){
  return
}this.nomber= JSON.parse(n)
  }


}

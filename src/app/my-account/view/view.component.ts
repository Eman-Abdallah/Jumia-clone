import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product.model';
import { ProductService } from 'src/app/product.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  viewedItems:Product[]=[]
  nomber!: number;
  constructor(private productService:ProductService) { }

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

  buy(product:Product){
    this.productService.addProductToCart(product)
  }
  remove(product:Product){
    this.productService.removeProductFromViewed(product)
    this.viewedItems.splice(this.viewedItems.indexOf(product), 1)
  }
  
}

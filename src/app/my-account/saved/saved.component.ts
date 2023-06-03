import { ProductService } from 'src/app/product.service';
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
  constructor(private productService:ProductService) { }

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
  buy(product:Product){
this.productService.addProductToCart(product)
  }
  remove(product:Product){
this.productService.removeProductFromSave(product)
this.SavedProducts.splice(this.SavedProducts.indexOf(product), 1)
  }
}

import { ActivatedRoute ,Params} from '@angular/router';
import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit , OnDestroy {
  subscribion: Subscription = new Subscription;

  constructor(private productService:ProductService,
    private routes:ActivatedRoute ) { }


    id!: number;
    product!: Product;
    number=0
    cortNumber=0
  SavedProducts:Product[]=[]
  cartProducts:Product[]=[]

topProducts:Product[]=[]
  ngOnInit(): void {
    this.topProducts=this.productService.topProduct
    this.subscribion= this.productService.productsSaved.subscribe((product:Product[])=>{
      this.cartProducts=product})

const saved=localStorage.getItem('savedItems')
const cartItems =JSON.parse(localStorage.getItem('cartItems')??"")


if(!saved ){
 return
}
this.SavedProducts=JSON.parse(saved)
this.number= this.SavedProducts.length


if(!cartItems ){
  return
 }
 this.cartProducts = this.productService.cartProduct
 this.cortNumber= this.cartProducts .length
 console.log( this.cartProducts);
 console.log( this.cartProducts.length);

  }
ngOnDestroy(): void {
    this.subscribion.unsubscribe()
}

remove(index:number){
this.productService.delete(index)
this.cortNumber= this.cartProducts .length

  }
}

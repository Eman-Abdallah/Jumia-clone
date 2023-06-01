import { Subscription } from 'rxjs';
import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../account/auth.service';

@Component({
  selector: 'app-product-one',
  templateUrl: './product-one.component.html',
  styleUrls: ['./product-one.component.css']
})
export class ProductOneComponent implements OnInit {
  isAuthenticated=false
  product!: Product;
  clicked!:boolean ;
  id!: number;
  userSub: Subscription = new Subscription;
  constructor(private productService:ProductService,
   private routes:ActivatedRoute ,
  private authService:AuthService,
  private router:Router) { }

  ngOnInit(): void {
this.routes.params.subscribe(
  (param:Params)=>{
this.id = +param['id']
this.product=this.productService.getId(this.id)
this.clicked = this.product.liked;
  }
)
this.userSub= this.authService.subject.subscribe(user=>{

  if(user._token ===""||user._token==null){
this.isAuthenticated=false
  }else{
    this.isAuthenticated=true;
  }
})}
save(){
  if(this.isAuthenticated){


    this.clicked=!this.clicked
    this.product.liked=!this.product.liked;
    console.log(this.product.liked);
if(this.product.liked){
  this.productService.addProductToSave(this.product)
}else{
  this.productService.removeProductFromSave(this.product)
  this.product
}
  }else{
this.router.navigate(['/sign'])
  }

  }
  addToCart(){
 this.productService.addProductToCart(this.product)
 console.log(this.productService.cartProduct)
  }
}

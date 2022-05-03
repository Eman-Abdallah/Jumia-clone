import { ActivatedRoute ,Params} from '@angular/router';
import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{





  product!: Product;
  flashSaleProduct:Product[]=[]
  mDaySaleProduct:Product[]=[]
  baeutyProduct:Product[]=[]
  topProduct:Product[]=[]
  id!: number;
isClicked= false
  constructor(private productService:ProductService,
    private routes:ActivatedRoute) { }

  ngOnInit(): void {
    this.routes.params.subscribe(
      (param:Params)=>{
    this.id = +param['id']
    this.product=this.productService.getId(this.id)
  })
  
this.flashSaleProduct=this.productService.flashSaleProduct
this.mDaySaleProduct= this.productService.mDaySaleProduct
this.baeutyProduct= this.productService.baeutyProduct
this.topProduct=this.productService.topProduct


  }
  onClick(){
    this.isClicked=true
  }
  viewed(){

    this.productService.addToViewed(this.product)

  console.log(this.product);

  }
}


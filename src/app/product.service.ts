import { Product } from './product.model';
import { Injectable, OnInit } from '@angular/core';

import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService  {
  products:Product[]=[
    new Product ('VGR V-055-Rechargeable Hair Shaver + Gift Bag ',170.00 ,30,'assets/image/1.jpg','This VGR electric cutting kit will meet your needs with its design and quality. Help yourself to recover and maintain a clean and confident appearance. Suitable for home and hair salon. Very easy to use, with detailed instructions for use.',1,'',10,45,true,false,false),
    new Product('The PACK Paper Cups Tea & Coffee Disposable Cups - 8Oz - 50 Pcs',27.00,45,'assets/image/3.jpg','Color : Multi ColorType :Disposable Cups,Number of pieces : 50 Pieces',2,'',45,25,true,false,false),
    new Product(' NA brand Fur Carpet Offwhite -180 × 100 Trendy, USA ',154.00,20,'assets/image/1 (2).jpg','Sheepskin fur carpet of high-quality polypropylene material  carpet wonderful fashion house 2020 unique piece gives your home sophistication and chiaki size 180 × 100',3,'',6,75,true,false,false),
    new Product('Finger Red Wood Koa Wood Arrow USA Tungsten',27.00,33,'assets/image/1 (3).jpg','Our orders are packed very firmly to prevent damage during shipping,Metals Type: USA Tungsten,Occasion: Engagement,Style: Trendy, USA',4,'',16,45,true,false,false),
    new Product('High Quality Mask With Soft Elastic  Ears  For Kids ',35.00,36,'assets/image/1 (4).jpg','kids Disposable Face mask 3 Layers,Each piece is individually wrapped,Flexible Ear Loops',5,'',23,65,true,false,false),
    new Product(' Dancing Cactus Enchanting Flower Cactus-- Twisting Music ',315,40,'assets/image/1 (1).jpg','',6,'',9,35,true,false,false,),
    new Product ('NIVEA Bundle of Soft Freshies Refreshing Creams ',69 , 78,'assets/image/6 (2).jpg','',7,'',10,45,false,true,false),
    new Product('Garnier Fast Bright Vitamin C Booster Serum 30ml ',142,21,'assets/image/4 (1).jpg','',8,'',10,45,false,true,false),
    new Product(' Nokia 106 - 1.8-inch Dual SIM Mobile Phone - Dark Grey',154,46,'assets/image/d1).jpg','',9,'',10,45,false,true,false),
    new Product('Roadwalker Comfortable Lace Up Casual Sneakers',125,34,'assets/image/45.jpg','Roadwalker offers good sneakers for men & women',10,'',10,45,false,true,false),
    new Product('Lenovo V14 Laptop - AMD 3020e - 4GB RAM - 1TB HDD - 14-inch HD',4555,17,'assets/image/w(4).jpg','',11,'',10,45,false,true,false),
    new Product('Vivo Y1s Dual SIM Mobile Phone, 6.22 Inch, 2 GB RAM, 32 GB ',1770,20,'assets/image/q(3).jpg','',12,'',10,45,false,true,false),
    new Product ('Bourjois Healthy Mix Anti Fatigue Foundation - 52 Vanilla',195 , 37,'assets/image/d(2).jpg','',13,'',10,45,false,false,false),

    new Product('Dr Rashell Radiance & Anti Aging 24K Gold Under Eye Serum 30ml',102,25,'assets/image/f (1).jpg','',14,'',10,45,false,false,false),

    new Product(' Bourjois Rouge Edition Velvet Lipstick - 09 Happy Nude Year',113,30,'assets/image/d(4).jpg','',15,'',10,45,false,false,false),

    new Product('Vaseline Intensive Care - Healthy Hand And Stronger Nails - 75ml',75,14,'assets/image/d(5).jpg','',16,'',10,45,false,false,false),

    new Product('Inglot AMC -Hypoallergenic, waterproof Eyeliner Gel ',215,300,'assets/image/d(3).jpg','',17,'',10,45,false,false,false),
    new Product(' Dr Rashell Day Cream - Vitamin C Brightening & Anti-Aging Cream 50G ',105,24,'assets/image/1 (6).jpg','',18,'',10,45,false,false,false),



     new Product ('Lenovo V15-ADA Laptop Integrated AMD Radeon Vega  ',4.444 , 25,'assets/image/top/1 (1).jpg','',19,'',10,45,false,false,true),



    new Product('Small Versatile Bathroom Organizer Shelf',75,30,'assets/image/d1).jpg','',20,'',10,45,false,false,true),

    new Product('Vaseline Intensive Care - Healthy Hand And Stronger Nails - 75ml',75,14,'assets/image/top/1 (2).jpg','',21,'',10,45,false,false,true),

    new Product('American Eagle Smocked Puff-Sleeve Top',175,38,'assets/image/top/1 (3).jpg','',22,'',10,45,false,false,true),

    new Product(' Joplan Dining Tablecloth - 100 * 100 Cm  ',185,24,'assets/image/top/1 (4).jpg','',23,'',10,45,false,false,true),

    new Product('SHEIN Round Pointer Quartz Watch-0025',192,75,'assets/image/f (1).jpg','',24,'',10,45,false,false,true),
  ]



 flashSaleProduct:Product[]=this.products.filter(product =>product.isFlashSale===true)

 mDaySaleProduct=this.products.filter(product =>product.isMothDay===true)

 baeutyProduct=this.products.filter(product =>product.isFlashSale===false && product.isFlashSale===false &&product.isMothDay===false &&product.top===false )

 topProduct=this.products.filter(product =>product.top===true)


savedProduct:Product[]=[]
uniqueSavedProduct:Product[]=[]
cartProduct:Product[]=[]
viewedProduct:Product[]=[]
productsSaved = new Subject<Product[]>()

  constructor() { }

  addProductToSave(product:Product){
    this.savedProduct.push(product)
    this.uniqueSavedProduct = [...new Set (this.savedProduct)];
    console.log(this.uniqueSavedProduct);
    
    localStorage.setItem('savedItems',JSON.stringify(this.uniqueSavedProduct))
  }
  removeProductFromSave(product:Product){
    const index =  this.savedProduct.indexOf(product); 
    this.savedProduct.splice(index, 1);
    localStorage.setItem('savedItems',JSON.stringify(this.savedProduct))
    console.log(product.liked);
    
    product.liked = false;
    console.log(product.liked);

  }

  addProductToCart(product:Product){
    this.cartProduct.push(product)
    localStorage.setItem('cartItems',JSON.stringify(this.cartProduct))
  }

  addToViewed(product:Product){
    this.viewedProduct.push(product)

    localStorage.setItem('viewedItems',JSON.stringify(this.viewedProduct))
  }
  getId(index:number){
  return  this.products.slice()[index]

  }
  getProduct(){
    return this.products.slice()
  }
  removeProductFromCart(product:Product){
    const index =  this.cartProduct.indexOf(product); 
    this.cartProduct.splice(index,1)
    localStorage.setItem('cartItems',JSON.stringify(this.cartProduct))
      }
      removeProductFromViewed(product:Product){
    const index =  this.viewedProduct.indexOf(product); 
    this.viewedProduct.splice(index,1)
    localStorage.setItem('viewedItems',JSON.stringify(this.viewedProduct))
      }
}

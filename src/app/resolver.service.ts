import { Product } from './product.model';
import { ProductService } from './product.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<Product[]> {

  constructor(private productService:ProductService) { }
  resolve(route: ActivatedRouteSnapshot, state:
    RouterStateSnapshot) {
      const products=this.productService.getProduct()
  return products


  }

}

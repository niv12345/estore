import { Component, inject, signal } from '@angular/core';
import { RatingsComponent } from "../../ratings/ratings.component";
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products/products.service';
import { IProduct } from '../types/products.type';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-details',
  imports: [RatingsComponent,CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  private readonly route = inject(ActivatedRoute);
  private readonly productsService = inject(ProductsService);

  readonly product = signal<IProduct | null>(null);

  constructor(){
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? Number(idParam):null;
    if(id !== null && !isNaN(id)){
     this.productsService.getProductById(id)
     .pipe(takeUntilDestroyed())
     .subscribe(res=>{
      this.product.set(Array.isArray(res)? res[0]:res)
     })
    }

  }

}



import { inject, Injectable, signal } from '@angular/core';
import { ProductsService } from './products.service';
import { IProduct } from '../../types/products.type';

@Injectable()
export class ProductsStoreItem {
    private readonly _products = signal<IProduct[]>([]);
    readonly products = this._products.asReadonly();
    productsService = inject(ProductsService);
    constructor(){
        this.loadProducts();
    }

    loadProducts(filter?:{
        maincategoryid?: number;
        subcategoryid?: number;
        keyword?: string;}){
        this.productsService.getProducts(filter).subscribe((products) => {
            console.log('Store Products loaded:', products);
            this._products.set(products);
        })
    }

}
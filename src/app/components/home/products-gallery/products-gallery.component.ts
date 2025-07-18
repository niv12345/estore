import { Component } from '@angular/core';
import { ProductsComponent } from '../../products/products.component';
import { SidemenuComponent } from '../sidemenu/sidemenu.component';
import { ProductsStoreItem } from '../services/products/product.storeItem';

@Component({
  selector: 'app-products-gallery',
  imports: [ProductsComponent,SidemenuComponent],
  templateUrl: './products-gallery.component.html',
  styleUrl: './products-gallery.component.css'
})
export class ProductsGalleryComponent {

  constructor(private productsStoreItem:ProductsStoreItem) { }

    onSelectedSubCategory(subcategoryId: number) {
    console.log('HOME Subcategory ID:', subcategoryId);
    this.productsStoreItem.loadProducts({subcategoryid:subcategoryId});
  }

}

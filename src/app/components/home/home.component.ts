import { Component, inject } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SubmenuComponent } from './submenu/submenu.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { ProductsComponent } from '../products/products.component';
import { CategoryService } from './services/category/category.service';
import { CategoryStoreItem } from './services/category/category.storeItem';
import { ProductsStoreItem } from './services/products/product.storeItem';
import { ProductsService } from './services/products/products.service';
import { SearchKeyword } from './types/searchKeyword.type';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent,SubmenuComponent,RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers:[CategoryService,CategoryStoreItem,ProductsStoreItem,ProductsService]
})
export class HomeComponent {

  categoryStoreItem = inject(CategoryStoreItem);
  productsStoreItem = inject(ProductsStoreItem)

  constructor(){
    this.categoryStoreItem.loadCategories();
    this.productsStoreItem.loadProducts();
  }


  onSelectedCategory(categoryId:number){
    this.productsStoreItem.loadProducts({maincategoryid:categoryId})
  }

  onSearchKeyword(searchKeyword:SearchKeyword):void{
  this.productsStoreItem.loadProducts({
    maincategoryid:searchKeyword.categoryId,
    keyword:searchKeyword.keyword
  });
  }
}

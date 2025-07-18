import { Component } from '@angular/core';
import { IProduct } from '../home/types/products.type';
import { RatingsComponent } from '../ratings/ratings.component';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../home/services/products/products.service';
import { ProductsStoreItem } from '../home/services/products/product.storeItem';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [CommonModule, RatingsComponent, FontAwesomeModule,RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  faBoxOpen = faBoxOpen;
  constructor(public productsStoreItem:ProductsStoreItem) {
  }
}

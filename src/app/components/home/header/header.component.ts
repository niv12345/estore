import { Component, inject, output, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch, faUserCircle, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CategoryStoreItem } from '../services/category/category.storeItem';
import { SearchKeyword } from '../types/searchKeyword.type';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/internal/operators/filter';


@Component({
  selector: 'app-header',
  imports: [FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  faSearch = faSearch;
  faUserCircle = faUserCircle;
  faShoppingCart = faShoppingCart;
  categoryStore = inject(CategoryStoreItem);
  
  readonly searchClicked = output<SearchKeyword>()
  displaySearch = signal(false);
   constructor(private router:Router){
    this.router.events.pipe(
      filter((event)=> event instanceof NavigationEnd)
    ).subscribe((event:NavigationEnd)=>{
      this.displaySearch.set(event.url === '/home/products')
    })
   }

  onSearch(categoryId:string, keyword?: string) {
    console.log('Search clicked with categoryId:', categoryId, 'and keyword:', keyword);

    this.searchClicked.emit({
      categoryId: parseInt(categoryId, 10),
      keyword: keyword ? keyword.trim() : undefined});

  }
}

import { Component, inject, output, signal } from '@angular/core';
import { categories } from '../sampleData/categories.data';
import { Icategory } from '../types/Icategory';
import { CategoryService } from '../services/category/category.service';
import { CategoryStoreItem } from '../services/category/category.storeItem';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs/internal/operators/filter';

@Component({
  selector: 'app-submenu',
  imports: [RouterLink],
  templateUrl: './submenu.component.html',
  styleUrl: './submenu.component.css'
})
export class SubmenuComponent {
categoryStore = inject(CategoryStoreItem);
//  constructor(public categoryStore:CategoryStoreItem){}
readonly categoryClicked = output<number>();
displayOptions = signal(true);

constructor(private router:Router){
  this.router.events.pipe(
    filter((event)=>event instanceof NavigationEnd)
  ).subscribe((event:NavigationEnd)=>{
    this.displayOptions.set(event.url === '/home/products')
  })
}

onCategoryclicked(categoryId:Icategory){
  console.log('Submenu clicked');
  // Emit the category ID to the parent component
  this.categoryClicked.emit(categoryId.id)
}
}

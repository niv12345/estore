import { computed, inject, Injectable, signal } from "@angular/core";
import { Icategory } from "../../types/Icategory";
import { CategoryService } from "./category.service";

@Injectable()
export class CategoryStoreItem {
private readonly _categories = signal<Icategory[]>([]);

readonly categories = this._categories.asReadonly();

readonly topLevelCategories = computed(()=>this._categories().filter((category)=>category.parent_category_id === null));

categoriesService = inject(CategoryService);

constructor() {
  this.loadCategories();
}

loadCategories(){
  this.categoriesService
  .getAllCategories()
  .subscribe((categories)=>{
    console.log('Categories loaded:', categories);
    this._categories.set(categories);
  }, (error) => {
    console.error('Error loading categories:', error);
  })
}
}

import { Component, inject, OnInit, output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { categories } from '../sampleData/categories.data';
import { Icategory } from '../types/Icategory';
import { CategoryService } from '../services/category/category.service';
import { CommonModule } from '@angular/common';
import { CategoryStoreItem } from '../services/category/category.storeItem';
@Component({
  selector: 'app-sidemenu',
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})
export class SidemenuComponent {
  faAngleDown = faAngleDown;
  categoryStore = inject(CategoryStoreItem)
  readonly categories = this.categoryStore.categories;
  readonly subCategoryClicked = output<number>();
  
  getCategories(parentId?: number): Icategory[] {
    return this.categories().filter((el) => 
          parentId 
    ? el.parent_category_id === parentId
    : el.parent_category_id === null
  );
  }
 onSubCategoryClick(category:Icategory) {
    console.log('SideMenu clicked:', category);
    // Emit the subcategory ID to the parent component
  this.subCategoryClicked.emit(category.id);

 }

}

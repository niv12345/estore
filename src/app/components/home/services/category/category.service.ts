import { Injectable } from '@angular/core';
import { categories } from '../../sampleData/categories.data';
import { Icategory } from '../../types/Icategory';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoryService {

  constructor(private http:HttpClient) { }

  getAllCategories(): Observable<Icategory[]> {
    console.log('Fetching categories from server...');
    return this.http.get<Icategory[]>('http://localhost:5001/productCategories');
  }
}

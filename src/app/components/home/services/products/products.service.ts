import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { IProduct } from '../../types/products.type';

@Injectable()
export class ProductsService {
  private readonly apiUrl = 'http://localhost:5001/products';
  constructor(private http:HttpClient) { }

  getProducts(
    filter?:{
      maincategoryid?:number,
      subcategoryid?:number,
      keyword?:string
    }
  ): Observable<IProduct[]> {
    let apiUrl = this.apiUrl;
    let params = new HttpParams();
    if(filter?.maincategoryid!=null){
    params = params.set('maincategoryid',filter.maincategoryid.toString());
    }
    if(filter?.subcategoryid!=null){
      params = params.set('subcategoryid',filter.subcategoryid.toString());
    }
    if(filter?.keyword!=null){
      params = params.set('keyword',filter.keyword);
    }
    return this.http.get<IProduct[]>(this.apiUrl,{ params });
  }

  getProductById(id:number):Observable<IProduct>{
    return this.http.get<IProduct>(`${this.apiUrl}/${id}`);
  }
}

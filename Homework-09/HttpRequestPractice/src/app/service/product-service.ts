import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ProductResponse {
  products: ProductItem[];
  total?: number;
  skip?: number;
  limit?: number;
}

export interface DeleteProductResponse {
  id: number;
  title: string;
  isDeleted: boolean;
  deletedOn: string; /* ISOTime */
}

export interface UpdateProductResponse {
  id: number;
  title?: string;
  description?: string;
  category?: string;
}

export interface ProductItem {
  id: number;
  title: string;
  description: string;
  category: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readUrl: string = 'https://dummyjson.com/products';
  private createUrl: string = 'https://dummyjson.com/products/add';
  private putUrl: string = 'https://dummyjson.com/products';
  private deleteUrl: string = 'https://dummyjson.com/products';
  constructor(private http: HttpClient) {}

  getProductList(): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(this.readUrl);
  }

  addProduct(newProduct: ProductItem): Observable<ProductItem> {
    return this.http.post<ProductItem>(this.createUrl, newProduct);
  }

  updateProductItem(productId: number, updatedItem: any): Observable<UpdateProductResponse> {
    // should use patch instead of put
    // patch => update partially
    console.log('api: ', updatedItem.id);
    console.log('api: ', updatedItem);
    return this.http.patch<UpdateProductResponse>(`${this.putUrl}/${productId}`, updatedItem);
  }

  deleteProduct(productId: number): Observable<DeleteProductResponse> {
    return this.http.delete<DeleteProductResponse>(`${this.deleteUrl}/${productId}`);
  }
}

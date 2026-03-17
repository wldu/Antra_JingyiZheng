import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ProductResponse, ProductService, ProductItem } from '../service/product-service';
import { Observable } from 'rxjs';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class Product implements OnInit {
  productList: ProductItem[] = [];
  isLoading: boolean = true;

  newProduct: ProductItem = { id: -1, title: '', description: '', category: '' };
  updatedProduct: ProductItem = { id: -1, title: '', description: '', category: '' };
  updatedId: number | undefined;

  constructor(
    private productService: ProductService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() {
    this.productService.getProductList().subscribe(
      (res: ProductResponse) => {
        console.log('res: ', res);
        this.productList = res.products;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      (error) => {
        console.log('get data error: ', error);
        this.isLoading = false;
        this.cdr.detectChanges();
      },
    );
  }

  addNewProduct() {
    this.newProduct.id = this.productList.length + 1;
    this.productService.addProduct(this.newProduct).subscribe(
      (res) => {
        console.log('res: ', res);
        console.log('add new product successfully');
      },
      (error) => {
        console.log('error: ', error);
        console.log('add new product error: ', error);
      },
    );
  }

  updateProductItem() {
    const toUpdatedProduct: any = {};
    if (this.updatedId && this.updatedId <= this.productList.length && this.updatedId > 0) {
      const { id, title, description, category } = this.updatedProduct;
      if (title) {
        toUpdatedProduct.title = title;
      }
      if (description) {
        toUpdatedProduct.description = description;
      }
      if (category) {
        toUpdatedProduct.category = category;
      }
      this.productService.updateProductItem(this.updatedId, toUpdatedProduct).subscribe((res) => {
        if (res && res?.id === this.updatedId) {
          console.log(`Update ${this.updatedId}th product successfully!`);
          // fake api
          // this.getProductList();
        } else {
          console.log(`Fail to ${this.updatedId}th product successfully!`);
        }
      });
    }
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe((res) => {
      if (res.isDeleted) {
        console.log(`Delete ${id}th product successfully!`);
        // fake api
        // this.getProductList();
      } else {
        console.log(`Fail to delete ${id}th product!`);
      }
    });
  }
}

import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Product } from './product/product';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './service/product-service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [App, Product],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), ProductService],
  bootstrap: [App],
})
export class AppModule {}

import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Parent } from './parent/parent';
import { TruncatePipe } from './parent/truncate-pipe';
import { Child } from './child/child';

@NgModule({
  declarations: [App, Parent, TruncatePipe, Child],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}

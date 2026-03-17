import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { User } from './user/user';
import { UserService } from './services/user-service';
import { Favorite } from './favorite/favorite';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [App, User, Favorite],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [provideBrowserGlobalErrorListeners(), UserService],
  bootstrap: [App],
})
export class AppModule {}

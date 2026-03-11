import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { TaskList } from './task-list/task-list';
import { FormsModule } from '@angular/forms';
import { DisplayOverflow } from './task-list/display-overflow';

@NgModule({
  declarations: [App, TaskList, DisplayOverflow],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}

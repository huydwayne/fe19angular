import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Baitap1Module} from './baitap1/baitap1.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Baitap1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

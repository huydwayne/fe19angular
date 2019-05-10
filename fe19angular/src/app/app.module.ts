import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Baitap1Module} from './baitap1/baitap1.module';
import { DataBindingModule } from './data-binding/data-binding.module'
import { StructuralDirectiveModule } from './structural-directive/structural-directive.module'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Baitap1Module,
    DataBindingModule,
    StructuralDirectiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

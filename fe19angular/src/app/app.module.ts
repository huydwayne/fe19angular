import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Baitap1Module} from './baitap1/baitap1.module';
import { DataBindingModule } from './data-binding/data-binding.module'
import { StructuralDirectiveModule } from './structural-directive/structural-directive.module'
import { AttributeDirectiveModule } from './attribute-directive/attribute-directive.module'
import { BaitapNgifModule } from './baitap-ngif/baitap-ngif.module'
import { BaitapSanphamModule } from './baitap-sanpham/baitap-sanpham.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Baitap1Module,
    DataBindingModule,
    StructuralDirectiveModule,
    AttributeDirectiveModule,
    BaitapNgifModule,
    BaitapSanphamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

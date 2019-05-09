import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Baitap1Component } from './baitap1.component';
import { Baitap1HeaderComponent } from './baitap1-header/baitap1-header.component';
import { Baitap1SlideComponent } from './baitap1-slide/baitap1-slide.component';
import { Baitap1SmartphoneComponent } from './baitap1-smartphone/baitap1-smartphone.component';
import { Baitap1LaptopComponent } from './baitap1-laptop/baitap1-laptop.component';
import { Baitap1FooterComponent } from './baitap1-footer/baitap1-footer.component';
import { FooterItemComponent } from './baitap1-footer/footer-item/footer-item.component';
import { Baitap1ItemComponent } from './baitap1-item/baitap1-item.component';

@NgModule({
  declarations: [Baitap1Component, Baitap1HeaderComponent, Baitap1SlideComponent, Baitap1SmartphoneComponent, Baitap1LaptopComponent, Baitap1FooterComponent , FooterItemComponent, Baitap1ItemComponent],
  imports: [
    CommonModule
  ],
  exports: [
    Baitap1Component, Baitap1HeaderComponent, Baitap1SlideComponent, Baitap1SmartphoneComponent, Baitap1LaptopComponent, Baitap1FooterComponent, FooterItemComponent, Baitap1ItemComponent
  ]
})
export class Baitap1Module { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatveBusComponent } from './datve-bus.component';
import { GheComponent } from './ghe/ghe.component';
import { DanhSachGheBusComponent } from './danh-sach-ghe-bus/danh-sach-ghe-bus.component';

@NgModule({
  declarations: [DatveBusComponent, GheComponent, DanhSachGheBusComponent],
  imports: [
    CommonModule
  ],
  exports: [
    DatveBusComponent, GheComponent, DanhSachGheBusComponent
  ]
})
export class DatveBusModule { }

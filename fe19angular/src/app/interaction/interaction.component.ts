import { Component, OnInit, ViewChild } from '@angular/core';
import {DanhsachPhimComponent} from './danhsach-phim/danhsach-phim.component'
@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.scss']
})
export class InteractionComponent implements OnInit {

  @ViewChild(DanhsachPhimComponent) dsPhim: DanhsachPhimComponent; 

  constructor() { }

  ngOnInit() {
  }

  themPhim(_maPhim, _tenPhim, _gia, _hinhAnh){
    let objPhim = {
      maPhim: _maPhim,
      tenPhim: _tenPhim,
      gia: _gia,
      hinhAnh: _hinhAnh,
    };

    this.dsPhim.themPhim(objPhim);
  }
}

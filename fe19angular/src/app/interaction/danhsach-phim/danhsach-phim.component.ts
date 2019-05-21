import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { ItemPhimComponent } from '../item-phim/item-phim.component'
@Component({
  selector: 'app-danhsach-phim',
  templateUrl: './danhsach-phim.component.html',
  styleUrls: ['./danhsach-phim.component.scss']
})
export class DanhsachPhimComponent implements OnInit {
  @ViewChildren(ItemPhimComponent) listTagItemPhim: QueryList<ItemPhimComponent>;

  danhSachPhim = [
    {maPhim: 1, tenPhim: "Minions", gia: "85000", hinhAnh:"assets/images/minions.jpg"},
    {maPhim: 2, tenPhim: "Home", gia: "85000", hinhAnh:"assets/images/home.jpg"},
    {maPhim: 3, tenPhim: "Harvie", gia: "85000", hinhAnh:"assets/images/harvie.jpg"},
    {maPhim: 4, tenPhim: "Insideout", gia: "85000", hinhAnh:"assets/images/insideout.jpg"},
  ];

  danhSachLike = [
    {maPhim: 1, tenPhim: "Minions", soLike: 0},
    {maPhim: 2, tenPhim: "Home", soLike: 0},
    {maPhim: 3, tenPhim: "Harvie", soLike: 0},
    {maPhim: 4, tenPhim: "Insideout", soLike: 0},
  ]
  constructor() { }

  ngOnInit() {
  }
  thich(phim){
    console.log(phim.maPhim);
    // this.danhSachLike.map(item => {
    //   if (item.maPhim === phim.maPhim){
    //     item.soLike++;
    //   }
    // })
    let movie = this.danhSachLike.find(item => item.maPhim === phim.maPhim);
    movie.soLike++;
  }

  themPhim(phim){
    this.danhSachPhim.push(phim);
    console.log(this.danhSachPhim);
  }

  viewChildren(){
    this.listTagItemPhim.map( item => {
      if (item.movie.maPhim === 2) {
        item.movie.gia = 100000;
      }
    })
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap-sanpham',
  templateUrl: './baitap-sanpham.component.html',
  styleUrls: ['./baitap-sanpham.component.scss']
})
export class BaitapSanphamComponent implements OnInit {
  DSSP:any = [];

  getInput(maSP, tenSP, price){
    let newSP = {maSP, tenSP, price};
    this.DSSP.push(newSP);
    localStorage.setItem("DSSP",JSON.stringify(this.DSSP));
  }
  getLocalStorage(){
    this.DSSP= JSON.parse(localStorage.getItem("DSSP"));
  }
  constructor() { }

  ngOnInit() {
    this.getLocalStorage();
  }

}

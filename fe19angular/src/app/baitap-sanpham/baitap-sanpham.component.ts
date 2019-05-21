import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap-sanpham',
  templateUrl: './baitap-sanpham.component.html',
  styleUrls: ['./baitap-sanpham.component.scss']
})
export class BaitapSanphamComponent implements OnInit {
  public DSSP:any = [];
  
  getInput(maSP, tenSP, price){
    let newSP = {maSP, tenSP, price};
    this.DSSP.push(newSP);
    console.log(this.DSSP[0]);
    localStorage.setItem("DSSP",JSON.stringify(this.DSSP));
  }
  getLocalStorage(){
    this.DSSP= JSON.parse(localStorage.getItem("DSSP"));
  }

  constructor() {

   }

  ngOnInit() {
<<<<<<< HEAD
    if (this.DSSP!==null){
=======
    if (JSON.parse(localStorage.getItem("DSSP"))!==null){
>>>>>>> af071a4f26a3b6781acbf810fabfb31d31b83917
      this.getLocalStorage();
    }
  }

}

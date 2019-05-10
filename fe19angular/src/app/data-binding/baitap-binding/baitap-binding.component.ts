import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap-binding',
  templateUrl: './baitap-binding.component.html',
  styleUrls: ['./baitap-binding.component.scss']
})
export class BaitapBindingComponent implements OnInit {
  email:string = "";
  fullname:string = "";
  eventBinding(value){
    this.fullname = value;
  }
  constructor() { }

  ngOnInit() {
  }

}

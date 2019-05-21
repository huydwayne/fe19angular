import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.scss']
})
export class GheComponent implements OnInit {
  @Input () objGhe;
  @Output() eventGhe = new EventEmitter;
  trangThaiChon:boolean = false;

  constructor() { }

  ngOnInit() {
  }
  chonGhe(){
   this.trangThaiChon = !this.trangThaiChon;
   this.eventGhe.emit(this.objGhe);
  // this.eventGhe.emit(this.trangThaiChon); Không push được 2 cái nó chỉ nhận duy nhất 1 cái emit gần nhất
  }
}

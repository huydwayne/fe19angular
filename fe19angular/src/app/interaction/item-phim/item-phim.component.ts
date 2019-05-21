import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-phim',
  templateUrl: './item-phim.component.html',
  styleUrls: ['./item-phim.component.scss']
})
export class ItemPhimComponent implements OnInit {
  @Input() movie;
  @Output() eventLike = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }

  like() {
    this.eventLike.emit(this.movie);
  }
}

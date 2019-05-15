import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.scss']
})
export class NgclassComponent implements OnInit {
  mauchuValue: boolean = true;
  fontchuValue: boolean = true;
  constructor() { }

  ngOnInit() {
  }

}

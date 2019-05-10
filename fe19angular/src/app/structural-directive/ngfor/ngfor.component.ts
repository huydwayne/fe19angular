import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.scss']
})
export class NgforComponent implements OnInit {
  public DSNV:any = [
    {ten: 'nguyen',tuoi: '16'},
    {ten: 'huy',tuoi: '19'},
    {ten: 'gien',tuoi: '17'},
    {ten: 'giang',tuoi: '19'}
  ];
  constructor() { }

  ngOnInit() {
  }

}

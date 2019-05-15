import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap-ngif',
  templateUrl: './baitap-ngif.component.html',
  styleUrls: ['./baitap-ngif.component.scss']
})
export class BaitapNgifComponent implements OnInit {
  name:string = "";
  isLogin:boolean = false ;

  loginCheck(user,pass){
    if (user === "cybersoft" && pass=== "cybersoft"){
      this.isLogin= true;
      this.name= user;
      let information = {username: user,password: pass};
      localStorage.setItem('account', JSON.stringify(information));
    }
  };
  logOut(){
    this.isLogin = false;
    localStorage.removeItem("account");
  }
  constructor() { }

  ngOnInit() {
    // Hàm chính main
    let information =  JSON.parse(localStorage.getItem('account'));
    if (information!==null){
      this.loginCheck(information.username,information.password);
    }
  }

}

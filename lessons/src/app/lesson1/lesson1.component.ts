import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lesson1',
  templateUrl: './lesson1.component.html',
  styleUrls: ['./lesson1.component.css']

})
export class Lesson1Component implements OnInit {


  newLogin=``;
  newPassword=``;
  newEmail=``;
  arrUser:Array<any>=[];
  buttonStatys=false;
  editIndex!:number;

  constructor() { }

  ngOnInit(): void {
  }


  
  addUser():void{
    if(this.newLogin ===`` || this.newPassword===`` || this.newEmail===``){
      alert(`error`)
    }
    else{
      let login=this.newLogin;
      let password=this.newPassword;
      let email=this.newEmail;
      let obj={login:login, password:password,email: email}
      this.arrUser.push(obj)
      console.log(this.arrUser);
      this.newLogin=``;
      this.newPassword=``;
      this.newEmail=``;
    }

  }

  deleteName(index:number):void{
    this.arrUser.splice(index,1)
  }
  editName(index:number):void{
    this.newLogin=this.arrUser[index].login
    this.newPassword=this.arrUser[index].password
    this.newEmail=this.arrUser[index].email
    this.editIndex=index;
    this.buttonStatys=true;
  }
  editUser():void{
    let login=this.newLogin;
    let password=this.newPassword;
    let email=this.newEmail;
    let obj={login:login, password:password,email: email}
    this.arrUser[this.editIndex]=obj
    this.newLogin=``;
    this.newPassword=``;
    this.newEmail=``;
    this.buttonStatys=false;
  }


}

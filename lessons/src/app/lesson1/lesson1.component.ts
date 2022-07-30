import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lesson1',
  templateUrl: './lesson1.component.html',
  styleUrls: ['./lesson1.component.css']

})
export class Lesson1Component implements OnInit {

tInput=``
badWords=``;
boolean=false;
booleanCenzor=false;
array:Array<string>=[];
textarea!:string;

  constructor() { }

  ngOnInit(): void {
  }

  addClick():void{
    let word=this.tInput

    if(this.tInput===``){

    alert(`erorr`)
    this.boolean=true

    }
    else{
      this.array.push(word)
      console.log(this.array);

      this.badWords+=word+` `;
      this.tInput=``;
      this.boolean=false
    }

  }
  resetClick():void{
    this.badWords=``;
    this.textarea=``
  }

  cenzor():void{
    if(this.textarea===undefined ||this.textarea===``){
      alert(`error`)
      this.booleanCenzor=true
    }
    else{
      this.booleanCenzor=false;
      for (const element of this.array) {
       if( this.textarea.includes(element)){
        let length=element.length
           let star=`*`
           let res=``
           for (let i=0;i<length;i++){
                        res+=star
                    }
                    this.textarea=this.textarea.replaceAll(element,res)
       }
      }

    }

  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qidz',
  templateUrl: './qidz.component.html',
  styleUrls: ['./qidz.component.css']
})
export class QidzComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  div1:boolean=true;
  div2:boolean=false;
  div3:boolean=false;

 
    div1Function(){
        this.div1=true;
        this.div2=false;
        this.div3=false;
    }

    div2Function(){
        this.div2=true;
        this.div3=false;
        this.div1=false;
    }
    items : any;

    
    divEvent(divs: any) {
      this.div2 = divs.div2;
      this.div1 = divs.div1;
    }
    div3Event(div3s: any) {
      console.log(div3s);
      this.div2 = div3s.div2;
      this.div1 = div3s.div1;
      this.div3 = div3s.div3;
    }
  }

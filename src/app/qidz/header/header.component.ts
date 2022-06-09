import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() div3s = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void {
  }
  div3Event(value : any) {
    console.log({ div2:true, div1:false, first: 'header-component'});
    this.div3s.emit({ div2:false, div1:false, div3:true});
  }

  
}

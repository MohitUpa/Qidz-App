import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MyEvents } from '../models/event.module';
// import { Events } from '../models/event.module';
@Component({
  selector: 'app-first-event-cat',
  templateUrl: './first-event-cat.component.html',
  styleUrls: ['./first-event-cat.component.css']
})
export class FirstEventCatComponent implements OnInit {

  @Output() detailEventPage = new EventEmitter<any>(); 

  public events = MyEvents;

  constructor() {
  }
  ngOnInit(): void {
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    autoplay: true,
    dots: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
    nav: true
  }

  eventDetail(value : any) {
    // console.log({ div2:true, div1:false, first: 'first-event-component'});
    this.detailEventPage.emit({ eventDetail:true, home:false});
  }
}

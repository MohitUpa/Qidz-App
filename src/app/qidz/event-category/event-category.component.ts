import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-event-category',
  templateUrl: './event-category.component.html',
  styleUrls: ['./event-category.component.css']
})
export class EventCategoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // slides = [
  //   { img: '../../../assets/img/banner-ad/event_cat_01.jpg' },
  //   { img: '../../../assets/img/banner-ad/event_cat_02.png' },
  //   { img: '../../../assets/img/banner-ad/event_cat_03.png' },
  //   { img: '../../../assets/img/banner-ad/event_cat_04.png' },
  //   { img: '../../../assets/img/banner-ad/event_cat_01.jpg' },
  //   { img: '../../../assets/img/banner-ad/event_cat_02.png' },
  //   { img: '../../../assets/img/banner-ad/event_cat_03.png' },
  //   { img: '../../../assets/img/banner-ad/event_cat_04.png' },
  // ];
  // slideConfig = { slidesToShow: 4, slidesToScroll: 1 };
  // addSlide() {
  //   this.slides.push({ img: 'http://placehold.it/350x150/777777' });
  // }
  // removeSlide() {
  //   this.slides.length = this.slides.length - 1;
  // }
  // slickInit(e: any) {
  //   console.log('slick initialized');
  // }
  // breakpoint(e: any) {
  //   console.log('breakpoint');
  // }
  // afterChange(e: any) {
  //   console.log('afterChange');
  // }
  // beforeChange(e: any) {
  //   console.log('beforeChange');
  // }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    autoplay:true,
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
}

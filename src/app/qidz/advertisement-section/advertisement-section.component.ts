import { Component, OnInit } from '@angular/core';
// import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-advertisement-section',
  templateUrl: './advertisement-section.component.html',
  styleUrls: ['./advertisement-section.component.css']
  // providers: [NgbCarouselConfig]
})
export class AdvertisementSectionComponent implements OnInit {

  ngOnInit(): void {
  }

  // slides = [
  //   { img: '../../../assets/img/banner-ad/banner_01.jpg' },
  //   { img: '../../../assets/img/banner-ad/banner_02.jpg' },
  //   { img: '../../../assets/img/banner-ad/banner_03.jpg' },
  //   { img: '../../../assets/img/banner-ad/banner_01.jpg' },
  //   { img: '../../../assets/img/banner-ad/banner_02.jpg' },
  // ];
  // slideConfig = { slidesToShow: 3, slidesToScroll: 1 };
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
        items: 3
      }
    },
    nav: true
  }
}

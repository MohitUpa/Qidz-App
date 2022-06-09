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

  home: boolean = true;
  eventDetail: boolean = false;
  register: boolean = false;

  homePage() {
    this.home = true;
    this.eventDetail = false;
    this.register = false;
  }
  onDetailEventPage(onDetailPage: any) {
    this.eventDetail = onDetailPage.eventDetail;
    this.home = onDetailPage.home;
  }
  onRegistrationPage(onRegisterPage: any) {
    this.eventDetail = onRegisterPage.eventDetail;
    this.home = onRegisterPage.home;
    this.register = onRegisterPage.register;
  }
}

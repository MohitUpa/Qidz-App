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
  login: boolean = false;

  homePage() {
    this.home = true;
    this.eventDetail = false;
    this.register = false;
    this.login = false;
  }
  onDetailEventPage(onDetailPage: any) {
    this.eventDetail = onDetailPage.eventDetail;
    this.home = onDetailPage.home;
    this.register = false;
    this.login = false;
  }
  onRegistrationPage(onRegisterPage: any) {
    this.eventDetail = onRegisterPage.eventDetail;
    this.home = onRegisterPage.home;
    this.register = onRegisterPage.register;
    this.login = onRegisterPage.login;
  }
  onLoginPage(onRegisterPage: any) {
    this.eventDetail = onRegisterPage.eventDetail;
    this.home = onRegisterPage.home;
    this.register = onRegisterPage.register;
    this.login = onRegisterPage.login;
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() registrationPage = new EventEmitter<any>();
  @Output() loginPage = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  registerPageEvent(value: any) {
    this.registrationPage.emit({ eventDetail: false, home: false, register: true,login: false });
  }
  loginPageEvent(value:any) {
    this.loginPage.emit({ eventDetail: false, home: false, register: false, login: true});
  }
}

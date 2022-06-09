import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() registrationPage = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  pageEvent(value: any) {
    this.registrationPage.emit({ eventDetail: false, home: false, register: true });
  }
}

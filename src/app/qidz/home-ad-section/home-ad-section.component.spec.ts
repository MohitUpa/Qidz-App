import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdSectionComponent } from './home-ad-section.component';

describe('HomeAdSectionComponent', () => {
  let component: HomeAdSectionComponent;
  let fixture: ComponentFixture<HomeAdSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAdSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAdSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

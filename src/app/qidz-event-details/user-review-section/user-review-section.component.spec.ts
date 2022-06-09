import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReviewSectionComponent } from './user-review-section.component';

describe('UserReviewSectionComponent', () => {
  let component: UserReviewSectionComponent;
  let fixture: ComponentFixture<UserReviewSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserReviewSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReviewSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

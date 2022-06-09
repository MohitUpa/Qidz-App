import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './qidz/header/header.component';
import { HeaderChildComponent } from './qidz/header/header-child/header-child.component';
import { FooterChildComponent } from './qidz/footer/footer-child/footer-child.component';
import { FooterComponent } from './qidz/footer/footer.component';
import { QidzComponent } from './qidz/qidz.component';
import { DownloadAppComponent } from './qidz/download-app/download-app.component';
import { FamilySectionComponent } from './qidz/family-section/family-section.component';
import { HomeAdSectionComponent } from './qidz/home-ad-section/home-ad-section.component';
import { BrowseCategoryComponent } from './qidz/browse-category/browse-category.component';
import { BlogSectionComponent } from './qidz/blog-section/blog-section.component';
import { HeroSectionComponent } from './qidz/hero-section/hero-section.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdvertisementSectionComponent } from './qidz/advertisement-section/advertisement-section.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { EventCategoryComponent } from './qidz/event-category/event-category.component';
import { FirstEventCatComponent } from './qidz/first-event-cat/first-event-cat.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { QidzEventDetailsComponent } from './qidz-event-details/qidz-event-details.component';
import { EventsSidebarComponent } from './qidz-event-details/events-sidebar/events-sidebar.component';
import { EventsReviewSectionComponent } from './qidz-event-details/events-review-section/events-review-section.component';
import { UserReviewSectionComponent } from './qidz-event-details/user-review-section/user-review-section.component';
import { ActivityDescriptionSectionComponent } from './qidz-event-details/activity-description-section/activity-description-section.component';
import { CaterpillarSectionComponent } from './qidz-event-details/caterpillar-section/caterpillar-section.component';
import { EventDiscountSectionComponent } from './qidz-event-details/event-discount-section/event-discount-section.component';
import { MediaSidebarSectionComponent } from './qidz-event-details/media-sidebar-section/media-sidebar-section.component';
import { BreakfastSectionComponent } from './qidz-event-details/breakfast-section/breakfast-section.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './Account/registration/registration.component';
import { LoginComponent } from './Account/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderChildComponent,
    FooterChildComponent,
    FooterComponent,
    QidzComponent,
    DownloadAppComponent,
    FamilySectionComponent,
    HomeAdSectionComponent,
    BrowseCategoryComponent,
    BlogSectionComponent,
    HeroSectionComponent,
    AdvertisementSectionComponent,
    EventCategoryComponent,
    FirstEventCatComponent,
    QidzEventDetailsComponent,
    EventsSidebarComponent,
    EventsReviewSectionComponent,
    UserReviewSectionComponent,
    ActivityDescriptionSectionComponent,
    CaterpillarSectionComponent,
    EventDiscountSectionComponent,
    MediaSidebarSectionComponent,
    BreakfastSectionComponent,
    RegistrationComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CarouselModule,
    SlickCarouselModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

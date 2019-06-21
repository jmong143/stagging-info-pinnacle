import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseLayoutComponent } from './components/layout/base-layout/base-layout.component';
import { LandingComponent } from './components/sections/landing/landing.component';
import { GoalsComponent } from './components/sections/goals/goals.component';
import { ExHeaderComponent } from './components/sections/experience/header/header.component';
import { ExContentComponent } from './components/sections/experience/content/content.component';
import { ReviewsComponent } from './components/sections/reviews/reviews.component';
import { ExclusiveComponent } from './components/sections/exclusive/exclusive.component';
import { FacilitiesComponent } from './components/sections/facilities/facilities.component';
import { LocationComponent } from './components/sections/location/location.component';
import { ContactComponent } from './components/sections/contact/contact.component';
import { ValueComponent } from './components/sections/value/value.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    LandingComponent,
    GoalsComponent,
    ExHeaderComponent,
    ExContentComponent,
    ReviewsComponent,
    ExclusiveComponent,
    FacilitiesComponent,
    LocationComponent,
    ContactComponent,
    ValueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

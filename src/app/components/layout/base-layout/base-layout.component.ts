import { Component, OnInit } from '@angular/core';
import { LandingComponent } from '../../sections/landing/landing.component';
import { GoalsComponent } from '../../sections/goals/goals.component'

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

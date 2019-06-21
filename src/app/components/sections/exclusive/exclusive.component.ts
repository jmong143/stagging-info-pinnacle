import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exclusive',
  templateUrl: './exclusive.component.html',
  styleUrls: ['./exclusive.component.scss']
})
export class ExclusiveComponent implements OnInit {

  features : any = []

  constructor() { }

  ngOnInit() {
    this.features = [
      "Thousands of updated, quality questions",
      "Concise summary per topic",
      "Practice questions, tests and mock exams",
      "Measures the progress and preparedness of the reviewee",
      "Can be accessed thru mobile phones, tablets and PC",
      "Can be used online or offline "
    ]
  }

}

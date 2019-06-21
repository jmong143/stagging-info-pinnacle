import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss']
})
export class FacilitiesComponent implements OnInit {

  height : Number = screen.height
  width : Number = screen.width
  constructor() { }

  ngOnInit() {

    console.log(this.height + " and " + this.width)
  }

}

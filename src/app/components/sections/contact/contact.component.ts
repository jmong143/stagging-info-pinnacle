import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  name : String = ''
  email : String = ''
  message : String = ''
  data : any = {}

  constructor() { }

  ngOnInit() {
  }

  sendMessage() {
    console.log(this.data)
  }

}

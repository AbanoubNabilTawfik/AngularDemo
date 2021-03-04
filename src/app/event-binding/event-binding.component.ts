import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {
 
  msg="Default Message"
  constructor() { }

  ngOnInit(): void {
  }

  displayMsg(myEvent)
  {
    console.log("Hello from Class")
    console.log(myEvent)
    this.msg="New MSG"
  }

}

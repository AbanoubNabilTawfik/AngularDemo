import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  //@Input() parentData;
  @Input('parentData') msgFromParent;
  newMsg="ay 7aga"
  @Output()msgFromChild= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  sendDataToParent()
  {
    this.msgFromChild.emit(this.newMsg)
    this.msgFromChild.emit();
  }

  printMsg()
  {
    console.log("Hello parent im excuting ")
  }

}

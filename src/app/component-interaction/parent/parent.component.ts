import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  msg="Hello child from parent";
  msgFromChildProp="";

  
  constructor() { }
  @ViewChild(ChildComponent) childData :ChildComponent;
  

  ngOnInit(): void {
  // this.childData.printMsg();  //not excuted
  }
  ngAfterViewInit()
  {
    this.childData.printMsg();
  }
  printMsg()
  {
    alert("Msg from child")
  }

}

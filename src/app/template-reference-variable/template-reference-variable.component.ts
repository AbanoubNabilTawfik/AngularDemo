import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-reference-variable',
  templateUrl: './template-reference-variable.component.html',
  styleUrls: ['./template-reference-variable.component.scss']
})
export class TemplateReferenceVariableComponent implements OnInit {
  msg=""
  constructor() { }

  ngOnInit(): void {
  }
  displayInputValue(inputControl)
  {
    console.log(inputControl.value)
    console.log("Welcome form class")
    this.msg=inputControl.value
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent implements OnInit {
  isLoggedIn=false;
  name="ITI";
  car="KIA";
  colors=["red","blue","black","gray","green"];
  names=["Mohamed","Ahmed","Marian","Mostafa"]
  constructor() { }

  ngOnInit(): void {
  }

}

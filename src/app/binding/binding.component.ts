import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent implements OnInit {
  headerTitle:string="This is header title";
  siteURL:string=window.location.href;
  headerId:string="test1000"

  textColor="text-danger"
  hasErr:boolean=false;
  isSpecial=false;

  setOfClasses={
    "text-success":!this.hasErr,
    "text-danger":this.hasErr,
    "text-special":this.isSpecial
  }
  setOfStyles={
    color:"gray",
    fontStyle:"italic"
  }
  constructor() { }

  ngOnInit(): void {
  }

  logMSG()
  {
    console.log("Hello from Component")
  }

}

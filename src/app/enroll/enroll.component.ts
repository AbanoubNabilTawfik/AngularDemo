import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.scss']
})
export class EnrollComponent implements OnInit {
  topics=['Angular','TypeScript','Bootstrap']                                                            
  userModel=new User('','','','','','','','',false);
  constructor() { }

  ngOnInit(): void {
  }

}

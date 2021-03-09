import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.scss']
})
export class EnrollComponent implements OnInit {
  topics=['Angular','TypeScript','Bootstrap']                                                            
  userModel=new User('','','','','','','','',false);
  constructor(private userService:UserService) { }
  topicHasErr=false;
  ngOnInit(): void {
  }

  validateTopic(topicValue)
  {
    if(topicValue==='default')
    {
      this.topicHasErr=true;
    }
    else
    {
      this.topicHasErr=false;
    }
  }

  submitData(userForm)
  {
    console.log(userForm)
    this.userService.enroll(this.userModel).subscribe(
      data=>{
        console.log("Success",data);
        //this.router.navigate(['/home'])
      },
      error=>
      {
         console.log('error',error)
      }
    )
  }

}

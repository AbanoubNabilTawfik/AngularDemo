import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from 'src/Shared/confirmPassword.validator';
import { ForbiddenNameValidator } from 'src/Shared/userName.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  // registerationForm=new FormGroup({
  //   userName: new FormControl(''),
  //   password:new FormControl(''),
  //   confirmPassword:new FormControl(''),

  //   address:new FormGroup({
  //     state:new FormControl(''),
  //     city:new FormControl(''),
  //     postalCode: new FormControl('')
  //   })
  // });
  
 
  
  registerationForm=this.fb.group({
    userName:['',[Validators.required,Validators.minLength(4),ForbiddenNameValidator(/ahmed/)]],
    password:[''],
    confirmPassword:[''],
    subscribe:[false],
    email:[''],
    alternativeEmails:this.fb.array([]),

    address:this.fb.group({
      state:[''],
      city:[''],
      postalCode: ['']
    })
  },{validators:[ConfirmPasswordValidator]});

    get alternativeEmails()
    {
      return this.registerationForm.get('alternativeEmails') as FormArray;
    }
    get userName()
    {
      return this.registerationForm.get('userName');
    }

    

    get email()
    {
      return this.registerationForm.get('email');

    }

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  addNewEmail()
  {
    this.alternativeEmails.push(this.fb.control(''))
  }
  removeEmail(i)
  {
    this.alternativeEmails.removeAt(i);
  }


  setEmailValidation()
  {
    this.registerationForm.get('subscribe').valueChanges.subscribe(
      checkedValue=>{
        const email= this.registerationForm.get('email');
        if(checkedValue)
        {
          //set email to required
          email.setValidators(Validators.required)
        }
        else
        {
          //remove required from email
          email.clearValidators();
        }
        email.updateValueAndValidity();
      }
    )
  }

  getDataFromAPI()
  {
    // this.registerationForm.setValue({
    //   userName:'ITI',
    //   password:'123',
    //   confirmPassword:'123',
    //   address:{
    //     state:'Egypt',
    //     city:'Assuit',
    //     postalCode:'71111'
    //   }
    // });

    this.registerationForm.patchValue({
      userName:'ITI',
      address:{
        state:'Egypt',
        city:'Assuit',
        postalCode:'71111'
      }
    });
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor() { }

  getAllEmployees()
  {
    return [
      {"name":"Ahmed  Mohamed" , "age":25},
      {"name":"Abanoub Magdy" , "age":24},
      {"name":"Gerges Abd elmalak" , "age":28},
      {"name":"Rewan Atef" , "age":23},
      {"name":"Salwa Ezz" , "age":22}
    ]
  }

  getEmployeeById(id:number)
  {

  }


}

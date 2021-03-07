import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from 'src/app/EmployeeServices/employee-service.service';
import { IEmployee } from 'src/app/Interfaces/IEmpolyee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  
  employeeList:IEmployee[]=[];
  errMsg;
  constructor(private empService:EmployeeServiceService) { }

  ngOnInit(): void {
    // this.employeeList=this.empService.getAllEmployees();
    this.empService.getAllEmployees().subscribe(
      serviceData=>
       {
         this.employeeList=serviceData;
       },
       serviceError=>
       {
        this.errMsg=serviceError;
       }

    )
  }

  // displayData()
  // {
  //   this.employeeList=this.empService.getAllEmployees();
  // }

}

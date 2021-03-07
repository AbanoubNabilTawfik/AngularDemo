import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from 'src/app/EmployeeServices/employee-service.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
 

  employeeList=[];
  errorMsg;
  constructor(private empServiceData:EmployeeServiceService) { }

  ngOnInit(): void {
    // console.log(this.employeeList)
    //this.employeeList=this.empServiceData.getAllEmployees();
     this.empServiceData.getAllEmployees().subscribe(
       data=>
       {
         this.employeeList=data;
       },
       error=>
       {
          this.errorMsg=error;
       }
     )

  }

}

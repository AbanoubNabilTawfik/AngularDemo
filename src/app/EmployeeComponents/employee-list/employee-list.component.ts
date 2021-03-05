import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from 'src/app/EmployeeServices/employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  
  employeeList=[];
  constructor(private empService:EmployeeServiceService) { }

  ngOnInit(): void {
     this.employeeList=this.empService.getAllEmployees();
  }

  displayData()
  {
    this.employeeList=this.empService.getAllEmployees();
  }

}

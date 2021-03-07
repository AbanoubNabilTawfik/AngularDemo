import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {
   departments=
   [
     {"id":1,"name":"Angular"},
     {"id":2,"name":"Bootstrap"},
     {"id":3,"name":"NodeJS"},
     {"id":4,"name":"HTML"}
   ]
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  goToDepartmentDetails(department)
  {
     let deptId=department.id;
     this.router.navigate(['/departments',deptId])
  }

}

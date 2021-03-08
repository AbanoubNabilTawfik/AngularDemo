import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {
  departments =
    [
      { "id": 1, "name": "Angular" },
      { "id": 2, "name": "Bootstrap" },
      { "id": 3, "name": "NodeJS" },
      { "id": 4, "name": "HTML" }
    ]
  selectedId:number;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      if (params.get('id') != null) {
        this.selectedId = parseInt(params.get('id'));
      }
      else {
        this.selectedId = 0;
      }
      //typeof(NaN)
      console.log(this.selectedId)

    })
  }

  isSelected(department) {
    // if (department.id == this.selectedId) {
    //   return true;
    // }
    // else {
    //   return false;
    // }
    return department.id == this.selectedId;
  }
  goToDepartmentDetails(department) {
    let deptId = department.id;
    this.router.navigate(['/departments', deptId])
  }

}

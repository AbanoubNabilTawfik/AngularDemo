import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.scss']
})
export class DepartmentDetailsComponent implements OnInit {
  deptId;
  constructor(private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    //this.deptId= parseInt(this.activatedRoute.snapshot.paramMap.get('id')) 
     this.activatedRoute.paramMap.subscribe((params:ParamMap)=>
     {
        this.deptId=parseInt(params.get('id'));
     })
  }
  goToDepartmentList()
  {
    this.router.navigate(['/departments',{id:this.deptId}])
  }
  goToContactInformation()
  {
    this.router.navigate(['contact-information'],{relativeTo:this.activatedRoute})

  }

  goToOverView()
  {
    this.router.navigate(['overview'],{relativeTo:this.activatedRoute})
  }

  goPrev()
  {
    let prevId=this.deptId-1;
   // this.deptId=prevId;
    this.router.navigate(['/departments',prevId])
  }

  goNext()
  {
    let nextId=this.deptId+1;
    this.router.navigate(['/departments',nextId])
  }

}

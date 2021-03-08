import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactInformationComponent } from './contact-information/contact-information.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './EmployeeComponents/employee-list/employee-list.component';
import { OverviewComponent } from './overview/overview.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'/departments',pathMatch:'full'},
  {path:'departments',component:DepartmentListComponent},
  {path:'employees',component:EmployeeListComponent},
  {path:'departments/:id',component:DepartmentDetailsComponent,
  children:[
    {path:'overview',component:OverviewComponent},
    {path:'contact-information',component:ContactInformationComponent}
  ]},
  
  {path:'**' ,component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { LeftNavComponent } from './main-content/left-nav/left-nav.component';
import { RightNavComponent } from './main-content/right-nav/right-nav.component';
import { AuthModule } from 'src/auth/auth.module';
import { BindingComponent } from './binding/binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TemplateReferenceVariableComponent } from './template-reference-variable/template-reference-variable.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { TestComponent } from './pipes/test/test.component';
import { PrintmsgPipe } from './pipes/printmsg.pipe';
import { SquarePipe } from './custom-pipes/square.pipe';
import { ParentComponent } from './component-interaction/parent/parent.component';
import { ChildComponent } from './component-interaction/child/child.component';
import { EmployeeListComponent } from './EmployeeComponents/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './EmployeeComponents/employee-details/employee-details.component';
import { EmployeeServiceService } from './EmployeeServices/employee-service.service';
import {HttpClientModule} from '@angular/common/http';
import { DepartmentListComponent } from './department-list/department-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    LeftNavComponent,
    RightNavComponent,
    BindingComponent,
    EventBindingComponent,
    TemplateReferenceVariableComponent,
    TwoWayBindingComponent,
    StructuralDirectivesComponent,
    PipesComponent,
    TestComponent,
    PrintmsgPipe,
    SquarePipe,
    ParentComponent,
    ChildComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    DepartmentListComponent,
    PageNotFoundComponent,
    DepartmentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // AuthModule,
    FormsModule,
    HttpClientModule
  ],
// providers: [EmployeeServiceService],
  providers: [EmployeeServiceService],

  bootstrap: [AppComponent]
})
export class AppModule { 

  
}

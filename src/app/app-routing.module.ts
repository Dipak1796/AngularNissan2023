import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeAddComponent } from './employees/employee-add/employee-add.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';

const routes: Routes = [
  {path:'',redirectTo:'employeelist',pathMatch:'full'},
  {path:'employeelist',component:EmployeeListComponent},
  {path:'employeeadd', component:EmployeeAddComponent},
  {path:'employeeadd/:empId',component:EmployeeAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

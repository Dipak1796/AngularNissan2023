import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/shared/employee';
import {EmployeeService} from 'src/app/shared/employee.service'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  //declare variable
  term: string;
  page:number=1;

  constructor(public employeeService: EmployeeService ,
              public router:Router) { }

  ngOnInit(): void { //Life Cycle hook
    console.log("Hello Dipak");
    this.getAllEmployeesForComponent();
    //window.location.reload();
  }
  //1 Get method for all employees
  getAllEmployeesForComponent(){
    //call service here
    this.employeeService.getAllEmployees();
    console.log("get All Employee");
    this.employeeService.getAllEmployeesList().subscribe(
      (response)=>{
        console.log(response);
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  // update Employee
updateEmployee(empId:number , emp: Employee){
   console.log(empId);
   //navigate to Edit Form with selected Employee
   this.router.navigate(['employeeadd',empId]);
   this.employeeService.formEmployeeData=Object.assign({},emp);
}

//delete employee
deleteEmployee(empId:number){
  console.log(empId);
  if(confirm('Are you confirn')){
    //call service for deletion
    console.log("call service for deletion");
  }
}
// populate Form When click on
populateForm(employee: Employee){
  console.log(employee);
  this.employeeService.formEmployeeData=Object.assign({},employee);
}
}

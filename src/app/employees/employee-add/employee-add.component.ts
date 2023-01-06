import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {

  //declare variablee
  _empId: number;
  constructor(public employeeService : EmployeeService,
              private toastr:ToastrService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {//Life Cycle hook
    //getAllDepartment
    this.employeeService.getAllDepartments();

    //getting data from url
    this._empId=this.route.snapshot.params['empId'];
    
  }
  //Submit Method
  onSubmit(form :NgForm){
    console.log(form.value);
    let _addEmpId=this.employeeService.formEmployeeData.empId;

    //check condition
    if(_addEmpId==0|| _addEmpId==null){
    this.addEmloyee(form);
    this.router.navigateByUrl("/employeelist");
   // window.location.reload();
     // this.redirectToEmpList();
    }
    else{
      this.editEmployee(form);
      window.location.reload();
    }
  }
  
  addEmloyee(form?:NgForm){
    console.log("Inserting...");
    this.employeeService.insertEmployee(form.value).subscribe(
      (result)=>{
        console.log(result);
        //Notification
        this.toastr.success("Employee record has been inserted!","EmpAppV2023");
        
      },
      (error)=>{
        console.log(error);
        this.toastr.error("Something Wrong ...try again","EmpAppV2023");
      }
      
    );
  }

  editEmployee(form?:NgForm){
    console.log("Updating...");
    this.employeeService.updateEmployee(form.value).subscribe(
      (result)=>{
        console.log(result);
      },
      (error)=>{
        console.log(error);
      }
      
    );
  }

  redirectToEmpList(){
    this.router.navigate(['employeelist']);
  }

}

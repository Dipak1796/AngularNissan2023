import { Injectable } from '@angular/core';
import { Employee } from './employee';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment'
import { Observable } from 'rxjs';
import { Department } from './department';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  //declare variables--- global variable
  formEmployeeData: Employee=new Employee();//single employee

  //list of Employee
  employees:Employee[];
  departments: Department[];

  constructor(private httpClient: HttpClient) { }//Constructor Injection : DI

  // 1 get all employees
  getAllEmployees(){
    this.httpClient.get(environment.apiUrl +'/api/employees')
    .toPromise()
    .then(
      (response)=>{
        console.log(response);
        this.employees=response as Employee[];
      },
      (error)=>{
        console.log(error);
      }
      );
  }

  //2 Observable Types
  getAllEmployeesList():Observable<any>{
    return this.httpClient.get(environment.apiUrl+'/api/employees');


  }

  // 3 Insert
  insertEmployee(employee:Employee): Observable<any>{
    return this.httpClient.post(environment.apiUrl +'/api/employees',employee);
  }

  //4 Update
  updateEmployee(employee:Employee): Observable<any>{
    return this.httpClient.put(environment.apiUrl +'/api/employees',employee);

  }

  //5 delete
  deleteEmployee(empId:number){
    
  }

  //Get all departments
  getAllDepartments():void{
    this.httpClient.get(environment.apiUrl +'/api/departments')
    .toPromise()
    .then(
      (response)=>{
        console.log(response);
        this.departments=response as Department[];
      },
      (error)=>{
        console.log(error);
      }
      );
  }

}

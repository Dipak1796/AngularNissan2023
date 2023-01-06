import { Department } from "./department";

export class Employee {
        empId:number =0;
        empName: string="";
        designation:string= "";
        dateOfJoining: Date=new Date;
        salary:number= 0;
        empPhoneNumber: string="";
        isActive: boolean=false;
        deptId:number= 0;

        //Object Oriented
        department: Department=new Department();
}

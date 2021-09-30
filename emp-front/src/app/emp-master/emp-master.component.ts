import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Emp } from '../emp';
import { empdata } from '../emp-data'
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-emp-master',
  templateUrl: './emp-master.component.html',
  styleUrls: ['./emp-master.component.css'],

})
export class EmpMasterComponent implements OnInit {

  public empList: Emp[] = [];
  public show: boolean = false;
  empData:Emp={empId:0,name:"Not Updated",city:"Not Updated",salary:0,doj:"Not Updated"};

  constructor(private _empService: EmpService) { }

  ngOnInit(): void {
    this._empService.getEmpJsonData().subscribe((data) => this.empList = data, () => { }, () => { if (this.empList.length > 0) this.show = true });

  }

  public onClick(empId:number){
    //this.empData=this._empService.findEmpById(empId)[0];
    this.empData=this.empList.filter((data)=>{return data.empId==empId?data:null})[0];
    console.log("Select Id : "+empId);
  }
}

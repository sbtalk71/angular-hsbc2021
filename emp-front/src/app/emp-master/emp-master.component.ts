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
  public show: boolean = true;
  constructor(private _empService: EmpService) { }

  ngOnInit(): void {
    this._empService.getEmpJsonData().subscribe((data) =>this.empList=data);
    // if (this.empList.length > 0) {
    //   this.show = true;
    // } else {
    //   this.show = false;
    // }
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Emp } from '../emp';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() emp:Emp={empId:0,name:"Not Updated",city:"Not Updated",salary:0,doj:"Not Updated"};
  constructor() { }

  ngOnInit(): void {
  }

}

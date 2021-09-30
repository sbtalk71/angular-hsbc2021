import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() parentData:String ="Parent Data not received"
  @Output() public childEvent=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public sendData(){
    this.childEvent.emit("Hello from Child");
  }

}

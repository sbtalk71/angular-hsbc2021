import { Component, OnInit } from '@angular/core';
import { GreetService } from '../greet.service';

@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.css']
})
export class GreeterComponent implements OnInit {

  constructor(private _greeterService:GreetService) { }

  ngOnInit(): void {
  }
  public getName(name: string) {
    console.log(name);
    this._greeterService.getGreetMessage(name).subscribe((data)=>console.log("Received :"+data.message))

  }

  public clickMe() {
    console.log("Button Clicked..");
    

  }
}

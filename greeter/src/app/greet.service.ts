import { HttpClient } from '@angular/common/http';
import { Message } from './message';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GreetService {

  private url="http://localhost:8080/message/";

  constructor(private _http:HttpClient) { }

  public getGreetMessage(name:string):Observable<Message>{
    return this._http.get<Message>(this.url+name,{'headers':{'Accept':'application/json'}});
  }
  
}

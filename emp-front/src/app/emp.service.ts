import { Injectable } from '@angular/core';
import { Emp } from './emp';
import { empdata } from './emp-data';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  private url = "/assets/data/empdata.json";

  constructor(private _http: HttpClient) { }

  public getEmpList(): Emp[] {

    return empdata;
  }

  public getEmpJsonData(): Observable<Emp[]> {
    return this._http.get<Emp[]>(this.url);
  }
}

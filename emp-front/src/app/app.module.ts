import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { EmpMasterComponent } from './emp-master/emp-master.component';
import { EmpService } from './emp.service';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    EmpMasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

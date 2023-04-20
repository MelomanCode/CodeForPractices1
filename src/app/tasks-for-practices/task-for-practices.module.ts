import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "../app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {Task1Component} from "./task-1/task-1.component";
import {Task2Component} from "./task-2/task-2.component";

@NgModule({
  declarations: [
    Task1Component,
    Task2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule]
})
export class TaskForPracticesModule {
}

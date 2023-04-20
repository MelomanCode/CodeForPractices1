import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FirstComponent} from "./first.component/first.component";
import {HeroCharacterComponent} from "./hero-character/hero-character.component";
import {HeroesPreviewComponent} from "./heroes-preview/heroes-preview.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {TaskComponent} from "./task.component/task.component";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from "./home/home.component";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {HeroesComponent} from "./heroes/heroes.component";
import {ResultTableComponent} from "./task.component/result-table/result-table.component";
import {TaskForPracticesModule} from "./tasks-for-practices/task-for-practices.module";

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    HeroCharacterComponent,
    HeroesPreviewComponent,
    NavbarComponent,
    TaskComponent,
    HomeComponent,
    HeroesComponent,
    ResultTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    NgOptimizedImage,
    TaskForPracticesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

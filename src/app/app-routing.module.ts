import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {HeroesComponent} from "./heroes/heroes.component";
import {TaskComponent} from "./task.component/task.component";
import {Task1Component} from "./tasks-for-practices/task-1/task-1.component";
import {Task2Component} from "./tasks-for-practices/task-2/task-2.component";


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'another', component: TaskComponent},
  {path: 'task', component: TaskComponent},
  {path: 'task-1', component: Task1Component},
  {path: 'task-2', component: Task2Component},
  {path: '**', redirectTo: 'home'}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

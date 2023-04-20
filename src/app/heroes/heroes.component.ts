import {Component} from '@angular/core';
import {TotalService} from "../first.component/total.service";

@Component({
  selector: 'heroes-root',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  constructor(public totalService: TotalService) {
  }

  get totalCount(): number {
    return this.totalService.totalCount;
  }
}

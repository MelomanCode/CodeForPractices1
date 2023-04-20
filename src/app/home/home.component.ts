import {Component, OnInit} from '@angular/core';
import {TotalService} from "../first.component/total.service";


@Component({
  selector: 'home-root', templateUrl: './home.component.html', styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public totalService: TotalService) {
  }

  ngOnInit(): void {
  }
}


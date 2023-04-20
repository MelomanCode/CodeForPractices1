import {Component, Input, OnInit} from '@angular/core';
import {TotalService} from "../first.component/total.service";


@Component({
  selector: 'hero-character',
  templateUrl: './hero-character.component.html',
  styleUrls: ['./hero-character.component.css']
})
export class HeroCharacterComponent implements OnInit {
  @Input() title = '';
  @Input() description = '';
  @Input() imageLink = '';

  constructor(totalService: TotalService) {

  }
  ngOnInit(): void {
  }

}

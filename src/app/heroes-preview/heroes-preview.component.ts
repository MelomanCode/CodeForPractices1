import {Component, OnInit} from '@angular/core';
import {TotalService} from "../first.component/total.service";
import {Hero} from "../hero-character/interfaces";
import {ARTHUR, BANSHEE, DIABLO, MELIODAS} from "../hero-character/constants";


@Component({
  selector: 'heroes-preview',
  templateUrl: './heroes-preview.component.html',
  styleUrls: ['./heroes-preview.component.css']
})
export class HeroesPreviewComponent implements OnInit {
  heroList: Hero[] = [];

  constructor(totalService: TotalService) {

  }

  ngOnInit(): void {
    const hero1: Hero = {
      title: ARTHUR.title,
      description: ARTHUR.description,
      imageLink: ARTHUR.imageLink
    }

    const hero2: Hero = {
      title: DIABLO.title,
      description: DIABLO.description,
      imageLink: DIABLO.imageLink
    }

    const hero3: Hero = {
      title: BANSHEE.title,
      description: BANSHEE.description,
      imageLink: BANSHEE.imageLink
    }

    const hero4: Hero = {
      title: MELIODAS.title,
      description: MELIODAS.description,
      imageLink: MELIODAS.imageLink
    }

    this.addHero(hero1)
    this.addHero(hero2)
    this.addHero(hero3)
    this.addHero(hero4)
  }

  addHero(hero: Hero): void {
    this.heroList.push(hero)
  }

}

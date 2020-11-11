import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  // constructor shouldn't contain actual calls, only mapping parameters to properties
  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    // works as a synchronous operation! Only possible because it's mock data, fetching from remote server is asynchronous!
    // this.heroes = this.heroService.getHeroes();

    // asynchronous solution with Observable
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}

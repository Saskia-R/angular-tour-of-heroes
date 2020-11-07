import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  // constructor shouldn't contain actual calls, only mapping parameters to properties
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    // works as a synchronous operation! Only possible because it's mock data, fetching from remote server is asynchronous!
    // this.heroes = this.heroService.getHeroes();

    // asynchronous solution with Observable
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}

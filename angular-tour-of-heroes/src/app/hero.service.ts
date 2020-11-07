import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message AFTER fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    // returns an Observable, that emits the array of mock heros as single value
    return of(HEROES);
  }
}

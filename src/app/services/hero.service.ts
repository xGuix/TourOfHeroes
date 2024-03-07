import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from '../interfaces/hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';

  constructor(
    private http: HttpClient,
    private messageService : MessageService,
    ) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id: number): Observable<Hero| undefined> {
    const hero = HEROES.find(h => h.id === id);
    this.messageService.add(`HeroService: fetched heroes id =${id}`);
    return of(hero);
  }

  private log(message : string){
    this.messageService.add(`HeroService: ${message}`)
  };

}

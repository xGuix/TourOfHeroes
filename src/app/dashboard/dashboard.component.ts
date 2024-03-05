import { RouterModule } from '@angular/router';
import { HeroService } from './../services/hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../interfaces/hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(
      heroes => this.heroes = heroes.slice(1, 5)
    );
  }
}

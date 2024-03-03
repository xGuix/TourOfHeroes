import { Component } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    HeroesComponent,
  ],
  standalone: true,
})
export class AppComponent {
  title = 'Tour Of Heroes';
}

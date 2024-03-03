import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.scss',
  imports: [
    CommonModule,
    FormsModule
  ],
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
}

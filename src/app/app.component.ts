import { Component } from '@angular/core';
import { AppModule } from './app.module';

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    AppModule
  ],
  standalone: true,
})
export class AppComponent {
  title = 'Tour Of Heroes';
}

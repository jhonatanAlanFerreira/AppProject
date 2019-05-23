import { Component } from '@angular/core';
import { IngredientsService } from './shared/ingredients.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [IngredientsService]
})
export class AppComponent {
}

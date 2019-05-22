import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'
import { IngredientsService } from '../shared/ingredients.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [IngredientsService]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Tomatoes',10)
  ];

  constructor(private service: IngredientsService) { }

  ngOnInit() {
    this.service.newIngredient.subscribe(ingredient => this.ingredients.push(ingredient));
  }

}

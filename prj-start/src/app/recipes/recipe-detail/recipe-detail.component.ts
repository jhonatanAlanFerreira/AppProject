import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/shared/recipe.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { IngredientsService } from 'src/app/shared/ingredients.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe:Recipe;

  constructor(private service: RecipeService, private serviceIngredient:IngredientsService) { }

  ngOnInit() {
    this.service.recipeSelected.subscribe(recipe => this.recipe = recipe);
  }

  addToShopping(){
    this.serviceIngredient.ingredients.push(...this.recipe.ingredients);
  }

}

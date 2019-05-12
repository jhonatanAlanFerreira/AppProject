import { Injectable, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  @Output () recipeSelected = new EventEmitter<Recipe>()

  constructor() { }

  selectRecipe(recipe:Recipe){
    this.recipeSelected.emit(recipe);
  }
}

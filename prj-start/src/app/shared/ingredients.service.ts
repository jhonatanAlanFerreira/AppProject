import { Injectable, Output, EventEmitter } from '@angular/core';
import { Ingredient } from './ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {
  ingredients:Ingredient[] = [
  new Ingredient('Apples',5),
  new Ingredient('Tomatoes',10)
]

get ingredientsList(){
  return this.ingredients;
}

  constructor() { }
}

import { Injectable, Output, EventEmitter } from '@angular/core';
import { Ingredient } from './ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {
  @Output() newIngredient = new EventEmitter<Ingredient>();

  constructor() { }
}

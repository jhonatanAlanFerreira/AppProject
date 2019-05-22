import { Component, OnInit } from '@angular/core';
import { IngredientsService } from 'src/app/shared/ingredients.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private service: IngredientsService) { }

  ngOnInit() {
  }

  addIngredient(name:string, amount: number){
    this.service.newIngredient.emit(new Ingredient(name,amount));
  }

}

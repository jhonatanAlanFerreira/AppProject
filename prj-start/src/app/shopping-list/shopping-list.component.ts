import { Component, OnInit, Input, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  toDelet = false;
  classEl = "list-group-item";
  recipeToDelet: ElementRef;

  ingredients: Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Tomatoes',10)
  ];

  constructor() { }

  ngOnInit() {
  }

  toDeletFunction(event){
    this.recipeToDelet = event;
    this.toggle();
  }

  toggle(clickOut = false){
    this.toDelet = clickOut? false:!this.toDelet;
    this.classEl = this.toDelet? "list-group-item toDelet":"list-group-item";
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if(this.recipeToDelet && !this.recipeToDelet.nativeElement.contains(event.target)) this.toggle(true);
  }

}

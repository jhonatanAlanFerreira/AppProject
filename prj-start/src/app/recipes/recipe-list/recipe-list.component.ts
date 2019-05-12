import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor() { }
  recipes: Recipe[] = [
    new Recipe('A test recipe','this is a simply test','https://previews.123rf.com/images/szefei/szefei1307/szefei130700138/20891507-indian-vegetarian-food-biryani-rice-curry-dhal-and-milk-tea-on-dining-table-.jpg')
    ,new Recipe('Another teste recipe','this is another simply test','https://media.defense.gov/2015/Nov/16/2001318253/-1/-1/0/151123-A-YG824-001.JPG')
  ];

  ngOnInit() {
  }

}

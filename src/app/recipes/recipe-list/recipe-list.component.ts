import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'http://www.foodtolove.com.au/assets/images/badge-collection.png'
    ),
     new Recipe(
      'A Test Recipe2',
      'This is simply a test',
      'http://www.foodtolove.com.au/assets/images/badge-collection.png'
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}
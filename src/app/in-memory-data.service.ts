import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Recipe } from './recipe/recipe.component';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const recipes = [
      { id: 1, name: 'cheesy taco', recipe: 'cook good'}
    ];
    return {recipes};
  }

  constructor() { }
}

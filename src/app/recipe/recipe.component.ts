import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export class Recipe {
    constructor(
        public url: string,
        public name: string, 
        public recipe: string
    ){

    }
}

@Component({
    selector: 'app-recipe',
    templateUrl: './recipe.component.html',
    styleUrls: ['./recipe.component.css']
})

export class RecipeComponent implements OnInit {

    recipes: Recipe[];
    constructor(
        private httpClient: HttpClient
    ) {}

    ngOnInit(): void {
        this.getRecipe();
    }

    getRecipe(){
        //allows to get any item and allow to fetch item synchronously
        this.httpClient.get<any>('http://taco-randomizer.herokuapp.com').subscribe(
             response => {
                 console.log(response);
                 this.recipes = response;
             }
        );
    }
}


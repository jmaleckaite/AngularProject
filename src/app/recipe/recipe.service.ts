import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Recipe } from './recipe.component';



@Injectable({ providedIn: 'root' })
export class RecipeService {

  private tacoUrl = 'http://taco-randomizer.herokuapp.com/';  

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

constructor(
    private http: HttpClient,
    
){}

getRecipes():Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.tacoUrl)
}

}
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Taco recipes';

  recipe:any;
  recipes=[];
  constructor(private http : HttpClient){

  }

  ngOnInit(): void {
    this.http.get('http://taco-randomizer.herokuapp.com/random/?full-taco=true').subscribe(Response => {
    console.log(Response);
    this.recipe=Response;
    this.recipes=this.recipe.list;
    });
  }

}

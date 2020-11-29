import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Taco recipes';

  private li: any = []
  
  constructor(private http : HttpClient){}

  getData() {
    this.http.get('http://taco-randomizer.herokuapp.com/random/?full-taco=true').subscribe((Response) => {
    this.li = Response;
    console.log(this.li)
    })
  }

}

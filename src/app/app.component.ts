import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//service injection of httpclient in the constructor
@Injectable()
export class AppComponent {
  title = 'Taco recipes';

  taco: any = [];
  //tacos=[];
  
  constructor(private http : HttpClient){}

  getData() {
    this.http.get('http://taco-randomizer.herokuapp.com/random/?full-taco=true').subscribe((Response) => {
    console.log(Response);
    this.taco = Response;
    //this.tacos = this.taco.shell;
    })
  }
}



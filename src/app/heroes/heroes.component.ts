import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/heroes';
import { HEROES } from '../models/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  selectedHero : Hero;

  mock = HEROES;

  ngOnInit() {
  }

  onSelect(obj:Hero){
    this.selectedHero = obj;
  }

}

import { Component, OnInit } from '@angular/core';
import { Rowdy } from '../models/rowdy';
@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {

  constructor() { }

  powers = ['tall', 'fly', 'catch'];

  model = new Rowdy(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit(){
    this.submitted = true;
  }

  ngOnInit() {
  }

  newHero(){
    this.model = new Rowdy(42, '', '','');
  }



}

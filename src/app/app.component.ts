import { Component } from '@angular/core';
import { SubjectedService } from './services/subjected.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular7app';

  // public cards: Array<any> = [
  //   {text: 'Card 1'},
  //   {text: 'Card 2'},
  //   {text: 'Card 3'},
  //   {text: 'Card 4'},
  //   {text: 'Card 5'},
  //   {text: 'Card 6'},
  //   {text: 'Card 7'},
  //   {text: 'Card 8'},
  //   {text: 'Card 9'},
  //   {text: 'Card 10'},
  // ];

  constructor(public subjec: SubjectedService) {
    // this.subjec.subje.subscribe(console.log)
    // cardService.get().subscribe((cards: any) => this.cards = cards);
  }

  // addCard(cardText : string){
  //   this.cards.push({text: cardText});
  // }


}

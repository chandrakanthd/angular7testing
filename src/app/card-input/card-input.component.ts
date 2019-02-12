import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-card-input',
  templateUrl: './card-input.component.html',
  styleUrls: ['./card-input.component.scss']
})
export class CardInputComponent implements OnInit {

  @Output() onCardAdd = new EventEmitter<string>();

  constructor() { }

  public newCard: any = { text: '' };

  ngOnInit() {
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.code === 'Enter' && this.newCard.text.length > 0) {
      this.addCard(this.newCard.text);
    }
  }

  addCard(text) {
    this.onCardAdd.emit(text);
    this.newCard.text = '';
  }


}

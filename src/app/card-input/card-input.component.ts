import { Component, OnInit, Output, EventEmitter, HostListener, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-input',
  templateUrl: './card-input.component.html',
  styleUrls: ['./card-input.component.scss']
})
export class CardInputComponent implements OnInit {

  @ViewChild('form') public form : NgForm;

  @Output() onCardAdd = new EventEmitter<string>();

  newCardForm : FormGroup;
  private alive = true;

  constructor(fb: FormBuilder) {
    this.newCardForm = fb.group({
      'text' : [ '', Validators.compose([Validators.required, Validators.minLength(2)])],
    });
   }

  public newCard: any = { text: '' };

  ngOnInit() {

  
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.code === 'Enter' && this.newCardForm.valid) {
      this.addCard(this.newCardForm.controls['text'].value);
    }
  }

  addCard(text) {
    this.onCardAdd.emit(text);
    this.newCardForm.controls['text'].setValue('');
  }




}

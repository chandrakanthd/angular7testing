import { Component, Input, Output, EventEmitter, OnChanges, OnInit } from '@angular/core';
import { NgOnChangesFeature } from '@angular/core/src/render3';

@Component({
  selector: 'app-about-child',
  templateUrl: './about-child.component.html',
  styleUrls: ['./about-child.component.scss']
})
export class AboutChildComponent implements  OnChanges {

  color = '';
  stockCount: number;

  @Input() stock: number;
  @Input() id: number;
  @Output() stockEmit = new EventEmitter();



updateStock() {
  this.stockEmit.emit({ id: this.id, stock: this.stockCount });
  this.stockCount = null;
}



ngOnChanges() {
  if (this.stock > 10) {
    this.color = 'green';
  } else {
    this.color = 'red';
  }
}

}
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pass-input',
  templateUrl: './pass-input.component.html',
  styleUrls: ['./pass-input.component.scss']
})
export class PassInputComponent implements OnInit {

  @Input() cards : Array<any>;

  constructor() { }

  ngOnInit() {
  }

}

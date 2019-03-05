import { Component, OnInit } from '@angular/core';
import { SubjectedService } from '../services/subjected.service';

@Component({
  selector: 'app-about-subscribe',
  templateUrl: './about-subscribe.component.html',
  styleUrls: ['./about-subscribe.component.scss']
})
export class AboutSubscribeComponent implements OnInit {

  constructor(public subj : SubjectedService) { 
    this.subj.subje.subscribe(console.log);
  }

  ngOnInit() {

   
  }

}

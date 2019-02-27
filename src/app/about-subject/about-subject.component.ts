import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SubjectedService } from '../services/subjected.service';

@Component({
  selector: 'app-about-subject',
  templateUrl: './about-subject.component.html',
  styleUrls: ['./about-subject.component.scss']
})
export class AboutSubjectComponent implements OnInit {

  constructor(public subje : SubjectedService) { }

  ngOnInit() {

    const subject = new BehaviorSubject('123');

    // subject.subscribe(console.log);
    // subject.subscribe(console.log);
    // subject.next('456');
    // subject.subscribe(console.log);
    // subject.next('789');
    // subject.subscribe(console.log);

    this.subje.subje.next('19283');

  }

}

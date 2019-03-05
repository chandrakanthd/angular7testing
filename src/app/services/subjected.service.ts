import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectedService {

  constructor() { }

  subje = new BehaviorSubject('123');
}

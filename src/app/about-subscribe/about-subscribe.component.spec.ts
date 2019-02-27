import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSubscribeComponent } from './about-subscribe.component';

describe('AboutSubscribeComponent', () => {
  let component: AboutSubscribeComponent;
  let fixture: ComponentFixture<AboutSubscribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutSubscribeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

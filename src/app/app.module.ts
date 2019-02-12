import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { PlayerComponent } from './player/player.component';
import { HtmlDomComponent } from './html-dom/html-dom.component';
import { PassInputComponent } from './pass-input/pass-input.component';
import { CardComponent } from './card/card.component';
import { CardInputComponent } from './card-input/card-input.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    PlayerComponent,
    HtmlDomComponent,
    PassInputComponent,
    CardComponent,
    CardInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { PlayerComponent } from './player/player.component';
import { HtmlDomComponent } from './html-dom/html-dom.component';
import { PassInputComponent } from './pass-input/pass-input.component';
import { CardComponent } from './card/card.component';
import { CardInputComponent } from './card-input/card-input.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { AboutSubjectComponent } from './about-subject/about-subject.component';
import { AboutSubscribeComponent } from './about-subscribe/about-subscribe.component';
import { AboutParentComponent } from './about-parent/about-parent.component';
import { AboutChildComponent } from './about-child/about-child.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    PlayerComponent,
    HtmlDomComponent,
    PassInputComponent,
    CardComponent,
    CardInputComponent,
    HeroFormComponent,
    NameEditorComponent,
    AboutSubjectComponent,
    AboutSubscribeComponent,
    AboutParentComponent,
    AboutChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

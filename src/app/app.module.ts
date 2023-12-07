import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesHomeComponent } from './movies-home/movies-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SafePipe } from './shared/safe.pipe';
import { NgToastModule } from 'ng-angular-popup';
import {MatIconModule} from '@angular/material/icon'
import {MatSelectModule} from '@angular/material/select';
import { CarouselComponent } from './carousel/carousel.component';
import { YtEmbedComponent } from './yt-embed/yt-embed.component';



@NgModule({
  declarations: [
    AppComponent,
    MoviesHomeComponent,
    HeaderComponent,
    MovieDetailsComponent,
    SafePipe,
    CarouselComponent,
    YtEmbedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    NgToastModule,
    MatIconModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

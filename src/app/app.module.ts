import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './myComponents/home/home.component';
import { GallaryComponent } from './myComponents/gallary/gallary.component';
import { ViewComponent } from './myComponents/view/view.component';
import { NevbarComponent } from './myComponents/nevbar/nevbar.component';
import { PageNotFoundComponent } from './myComponents/page-not-found/page-not-found.component';
import { HomecardComponent } from './myComponents/cards/homecard/homecard.component';
import { FooterComponent } from './myComponents/footer/footer.component';
import { GallarycardComponent } from './myComponents/cards/gallarycard/gallarycard.component';
import { FormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common'
import { HttpClientModule, provideHttpClient } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GallaryComponent,
    ViewComponent,
    NevbarComponent,
    PageNotFoundComponent,
    HomecardComponent,
    FooterComponent,
    GallarycardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgOptimizedImage,
    HttpClientModule
  ],
  providers: [
    provideHttpClient(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

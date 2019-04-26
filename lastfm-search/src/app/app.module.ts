import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { SearchbarComponent } from './searchbar/searchbar.component';
import { LastfmApiService } from './lastfm-api.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LastfmApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

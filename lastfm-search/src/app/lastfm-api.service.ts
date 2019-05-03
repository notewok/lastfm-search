import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LastfmData } from './lastfmData';

@Injectable({
  providedIn: 'root'
})

export class LastfmApiService {
  private http: HttpClient;
  input = '';

  constructor(http: HttpClient) {
      this.http = http;
  }

  searchValue(value: string) {
    this.input = value;
  }

  fetch(callBackFunction: (result) => void) {
    let httpAddress =
    `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${this.input}&api_key=0ce3f03b4ae2c82ed37d595af73336b0&format=json`;
    this.http.get<LastfmData>(httpAddress).subscribe(jsonObject => {
      console.log(jsonObject);
      callBackFunction(jsonObject);
    });
  }

}

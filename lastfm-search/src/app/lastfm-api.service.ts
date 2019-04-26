import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LastfmApiService {
  private http: HttpClient;

  constructor(http: HttpClient) {
      this.http = http;
  }

  fetch(callBackFunction: (result) => void): void {
    let input = 'Bloc Party';
    let httpAddress =
    `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${input}&api_key=0ce3f03b4ae2c82ed37d595af73336b0&format=json`;
      this.http.get(httpAddress)
      .subscribe(jsonObject => {
          console.log(jsonObject);
          callBackFunction(jsonObject);
      });
  }
}

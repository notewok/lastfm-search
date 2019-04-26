import { Component, OnInit } from '@angular/core';
import { LastfmApiService } from '../lastfm-api.service';

interface lfData { name: string, tags }

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  lastfmData: lfData[];
  lastfmApiService;
  userInput = {name: ''};

  constructor( lastfmService: LastfmApiService ) {
    this.lastfmApiService = lastfmService;
  }

  ngOnInit() {
    this.lastfmApiService.fetch((result) => {
        this.lastfmData = result.artist;
        console.log(result);
    });
  }

}

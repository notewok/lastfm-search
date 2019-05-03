import { Component, OnInit } from '@angular/core';
import { LastfmApiService } from '../lastfm-api.service';
import { LastfmData } from '../lastfmData';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  lastfmData: LastfmData;
  lastfmApiService;
  value: string;

  constructor( lastfmService: LastfmApiService ) {
    this.lastfmApiService = lastfmService;
  }

  search(searchValue: string) {
    let service = this.lastfmApiService;
    this.value = searchValue;

    service.searchValue(this.value);
    service.fetch((result) => {
          this.lastfmData = result.artist;
    });
  }


  ngOnInit() {
    this.lastfmApiService.fetch((result) => {
        this.lastfmData = result.artist;
    });
  }
}

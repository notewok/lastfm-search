import { Component, OnInit } from '@angular/core';
import { LastfmApiService } from '../lastfm-api.service';

interface lfData { name: string, tags }

@Component({
  selector: 'app-searchbar',
  template: `<ul>
                <li>
                <h3>{{ lastfmData.name }}</h3>
                <span *ngFor="let tag of lastfmData.tags.tag"> {{ tag.name }}</span>
                </li>
              </ul>
  `,
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  lastfmData: lfData[];
  lastfmApiService;

  constructor( lastfmService: LastfmApiService ) {
    this.lastfmApiService = lastfmService;
  }

  ngOnInit() {
    this.lastfmApiService.fetch((result) => {
        this.lastfmData = result.artist;
        console.log(result.tags.tag);
    });
  }

}

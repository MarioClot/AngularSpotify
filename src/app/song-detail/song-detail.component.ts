import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Song }         from '../song';
import { SongService }  from '../song.service';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: [ './song-detail.component.css' ]
})
export class SongDetailComponent implements OnInit {
  @Input() song: Song;

  constructor(
    private route: ActivatedRoute,
    private songService: SongService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getSong();
  }

  getSong(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.songService.getSong(id)
      .subscribe(song => this.song = song);
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
    this.songService.updateSong(this.song)
      .subscribe(() => this.goBack());
  }
}

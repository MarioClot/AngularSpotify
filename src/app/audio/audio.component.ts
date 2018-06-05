import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Song } from 'src/app/song';

@Component({
  selector: 'audio-component',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {
  song: Song;

  constructor() {}

  ngOnInit() {
  }

  play(songID: string): void {
    this.song.src = songID;
    var audio = new Audio('../assets/songs/'+songID);
    audio.play();
  }

}
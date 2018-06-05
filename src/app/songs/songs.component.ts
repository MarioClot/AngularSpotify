import { Component, OnInit } from '@angular/core';
import { Song } from '../song';
import { SongService } from '../song.service';
import { MessageService } from 'src/app/message.service';
import { AudioComponent } from 'src/app/audio/audio.component';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {
  songs: Song[];
  audio;
  audioState=false;

  constructor(private songService: SongService,
  private messageService: MessageService) { }

  ngOnInit() {
    this.getSongs();
  }

  getSongs(): void {
    this.songService.getSongs().subscribe(songs => this.songs = songs);
  }

  delete(song: Song): void {
    this.songs = this.songs.filter(h => h !== song);
    this.songService.deleteSong(song).subscribe();
  }

  play(song: Song): void {
    if(this.audioState==true){
      this.audio.pause();
      this.audio = new Audio('../assets/songs/'+song.id+'.mp3');
      this.audio.play();
      this.audioState=true;
    }else{
      this.audio = new Audio('../assets/songs/'+song.id+'.mp3');
      this.audio.play();
      this.audioState=true;      
    }
  }

  stop(): void {
    if(this.audioState==true)
      this.audio.pause();
  }

}

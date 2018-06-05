import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';
import { Song } from 'src/app/song';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
@Injectable({ providedIn: 'root' })
export class SongService {
    private songsUrl = 'api/songs';  // URL to web api
    
    constructor(private http: HttpClient,
        private messageService: MessageService
    ) { }

    getSongs (): Observable<Song[]> {
        return this.http.get<Song[]>(this.songsUrl)
          .pipe(
            tap(songs => this.log(`fetched songs`)),
            catchError(this.handleError('getSongs', []))
          );
    }

    getSongNo404<Data>(id: number): Observable<Song> {
        const url = `${this.songsUrl}/?id=${id}`;
        return this.http.get<Song[]>(url)
          .pipe(
            map(songs => songs[0]), // returns a {0|1} element array
            tap(h => {
              const outcome = h ? `fetched` : `did not find`;
              this.log(`${outcome} hero id=${id}`);
            }),
            catchError(this.handleError<Song>(`getSong id=${id}`))
          );
    }

    getSong(id: number): Observable<Song> {
        const url = `${this.songsUrl}/${id}`;
        return this.http.get<Song>(url).pipe(
          tap(_ => this.log(`fetched song id=${id}`)),
          catchError(this.handleError<Song>(`getSong id=${id}`))
        );
    }

    searchSongs(term: string): Observable<Song[]> {
        if (!term.trim()) {
          return of([]);
        }
        return this.http.get<Song[]>(`${this.songsUrl}/?name=${term}`).pipe(
          tap(_ => this.log(`found songs matching "${term}"`)),
          catchError(this.handleError<Song[]>('searchSongs', []))
        );
    }

    deleteSong (song: Song | number): Observable<Song> {
        const id = typeof song === 'number' ? song : song.id;
        const url = `${this.songsUrl}/${id}`;
    
        return this.http.delete<Song>(url, httpOptions).pipe(
          tap(_ => this.log(`deleted song id=${id}`)),
          catchError(this.handleError<Song>('deleteSong'))
        );
    }
    
    updateSong (song: Song): Observable<any> {
        return this.http.put(this.songsUrl, song, httpOptions).pipe(
          tap(_ => this.log(`updated song id=${song.id}`)),
          catchError(this.handleError<any>('updateSong'))
        );
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
          console.error(error); // log to console instead
          this.log(`${operation} failed: ${error.message}`);
          return of(result as T);
        };
      }
    
      private log(message: string) {
        this.messageService.add('Song service: ' + message);
      }
}
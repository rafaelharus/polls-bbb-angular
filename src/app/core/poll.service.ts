import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Poll } from './poll';

const URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor(private http: HttpClient) {
  }

  fetchPoll(pollId: string) {
    return this.http.get<Poll>(URL + '/v1/poll/' + pollId, {
        headers: {
          authorization: environment.apiKey,
          'content-type': 'application/json',
        }
      }
    )
  }
}

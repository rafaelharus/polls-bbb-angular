import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Result } from './result';

const URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private http: HttpClient) {
  }

  addAnswer(pollId: string, personId: string) {
    return this.http.post(URL + '/v1/answer', { pollId, personId }, {
        headers: {
          authorization: environment.apiKey,
          'content-type': 'application/json',
        }
      }
    )
  }

  fetchResults(pollId: string, ids: []) {
    return this.http.post<Result>(URL + '/v1/dashboard', { pollId, ids }, {
        headers: {
          authorization: environment.apiKey,
          'content-type': 'application/json',
        }
      }
    )
  }
}

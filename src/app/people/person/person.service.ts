import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonResource } from './person.resource';
import { environment } from '../../../environments/environment';
import { Person } from './person';

const URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) {
  }

  listPeople() {
    return this.http.get<PersonResource>(URL + '/v1/person', {
      headers: {
        authorization: environment.apiKey,
        'content-type': 'application/json',
      }
    });
  }

  findById(id: string) {
    return this.http.get<Person>(URL + '/v1/person/' + id, {
      headers: {
        authorization: environment.apiKey,
        'content-type': 'application/json',
      }
    });
  }
}

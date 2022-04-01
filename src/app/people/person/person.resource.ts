import { Person } from './person';

export interface PersonResource {
  _embedded: {
    person: Person[]
  };
}

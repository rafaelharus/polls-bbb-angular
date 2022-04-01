import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from '../people/person/person.service';
import { Person } from '../people/person/person';
import { AnswerService } from '../core/answer.service';
import { PollService } from '../core/poll.service';
import { environment } from '../../environments/environment';
import { Result } from '../core/result';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  person!: Person;
  id!: string;
  dataDash!: Result;
  people: Person[] = [];
  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
    private pollService: PollService,
    private answerService: AnswerService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.personService.findById(this.id)
      .subscribe((person) => {
        this.person = person
      });

    this.personService
      .listPeople()
      .subscribe(person => this.people = person._embedded.person);

    this.pollService.fetchPoll(environment.pollId).subscribe((data) => {
      const people = data.people;
      this.answerService.fetchResults(environment.pollId, people).subscribe(
        results => {
          this.dataDash = results
        })
    })
  }
}

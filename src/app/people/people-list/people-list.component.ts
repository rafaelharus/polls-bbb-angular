import { Component, OnInit } from '@angular/core';
import { Person } from '../person/person';
import { PersonService } from '../person/person.service';
import { FormBuilder, Validators } from '@angular/forms';
import { AnswerService } from '../../core/answer.service';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  people: Person[] = [];
  personId: string = '';
  pollForm: any;

  constructor(private router: Router, private personService: PersonService, private answerService: AnswerService, private formBuilder: FormBuilder) {}

  onVerify(token: string) {
    this.personId = this.pollForm.get('personId').value;
    this.answerService
      .addAnswer(environment.pollId, this.personId)
      .subscribe(
        () => this.router.navigate(['/result', this.personId]),
        err => { alert('Error ao computar voto!') }
      );
  }

  onExpired(response: any) {
    // The verification expired.
  }

  onError(error: any) {
    // An error occured during the verification process.
  }

  ngOnInit(): void {
    this.personService
      .listPeople()
      .subscribe(person => this.people = person._embedded.person);

    this.pollForm = this.formBuilder.group({
      personId: [
        '',
        Validators.required
      ]
    });
  }
}

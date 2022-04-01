import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PersonComponent } from './person/person.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgHcaptchaModule } from 'ng-hcaptcha';
import { ShowElementModule } from '../utils/show-element/show-element.module';
import { RouterModule } from '@angular/router';
import { environment } from '../../environments/environment';
import { ResultModule } from '../result/result.module';

@NgModule({
  declarations: [
    PersonComponent,
    PeopleListComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    ShowElementModule,
    ResultModule,
    NgHcaptchaModule.forRoot({
      siteKey: environment.nhcaptchaSiteKey,
    })
  ]
})
export class PeopleModule {}

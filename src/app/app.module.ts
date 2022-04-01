import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PeopleModule } from './people/people.module';
import { ErrorsModule } from './errors/errors.module';
import { ResultModule } from './result/result.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    PeopleModule,
    AppRoutingModule,
    ErrorsModule,
    ResultModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ResultComponent } from './result.component';

@NgModule({
  declarations: [
    ResultComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule,
  ]
})
export class ResultModule {}

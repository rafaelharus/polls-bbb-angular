import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PeopleListComponent } from './people/people-list/people-list.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {
    path: '',
    component: PeopleListComponent,
  },
  {
    path: 'result/:id',
    component: ResultComponent,
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

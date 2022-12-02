import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './components/Projects/project-list/project-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectListComponent
  },
  {
    path: 'projects',
    component: ProjectListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

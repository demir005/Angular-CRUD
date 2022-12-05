import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProjectComponent } from './components/Projects/add-project/add-project.component';
import { EditProjectComponent } from './components/Projects/edit-project/edit-project.component';
import { ProjectListComponent } from './components/Projects/project-list/project-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectListComponent
  },
  {
    path: 'projects',
    component: ProjectListComponent
  },
  {
    path: 'projects/add',
    component: AddProjectComponent
  },
  {
    path: 'projects/edit/:id',
    component: EditProjectComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

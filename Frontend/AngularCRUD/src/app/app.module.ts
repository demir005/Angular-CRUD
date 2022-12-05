import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectListComponent } from './components/Projects/project-list/project-list.component';
import { AddProjectComponent } from './components/Projects/add-project/add-project.component';
import { FormsModule } from '@angular/forms';
import { EditProjectComponent } from './components/Projects/edit-project/edit-project.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    AddProjectComponent,
    EditProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

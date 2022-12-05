import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Projects } from 'src/app/models/project.model';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit  {
  
  addProjectRequest: Projects = {
   id: '',
   name: '',
   created: new Date()
  };

  constructor(private projectService:ProjectsService, private router: Router){}

  ngOnInit():void{}

  addProject(){
   this.projectService.addProject(this.addProjectRequest)
   .subscribe({
    next: (projects) =>{
      this.router.navigate(['projects']);
    }
   });
  }
}

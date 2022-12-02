import { Component,OnInit } from '@angular/core';
import { error } from 'console';
import { Projects } from 'src/app/models/project.model';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit{
 constructor(private projectService: ProjectsService) { }
  
  projects : Projects[] = [];

  ngOnInit(): void {
    this.projectService.getAllProject()
    .subscribe({
      next: (projects) => {
        this.projects = projects;
      },
      error: (response) => {
        console.log(response);
      }
           
    })
    
  }
 
}

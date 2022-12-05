import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Projects } from 'src/app/models/project.model';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit{

  projectDetails : Projects = {
    id: '',
    name : '',
    created: new Date()
  };

  constructor(private route: ActivatedRoute, private projectService : ProjectsService){

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params) => {
       const id = params.get('id');

       if(id){
        this.projectService.getProject(id)
        .subscribe({
          next: (response) => {
              this.projectDetails = response;
          }
        });

       }
      }
    })
  }

}

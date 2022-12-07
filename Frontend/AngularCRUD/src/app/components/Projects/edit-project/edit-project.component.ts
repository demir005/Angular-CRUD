import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Projects } from 'src/app/models/project.model';
import { ProjectsService } from 'src/app/services/projects.service';
import { Router } from '@angular/router';

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

  constructor(private route: ActivatedRoute, private projectService : ProjectsService,
         private router: Router){

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
  
  updateProject(){
    this.projectService.updateProject(this.projectDetails.id, this.projectDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['projects']);
      }
    });
  }

  deleteProject(id:string){
    this.projectService.deleteProject(id)
    .subscribe({
       next: (response) => {
        this.router.navigate(['projects']);
       }
    });
  }
}

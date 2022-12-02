import { Component,OnInit } from '@angular/core';
import { Projects } from 'src/app/models/project.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit{
 constructor() { }
  
  projects : Projects[] = [];

  ngOnInit(): void {
    this.projects.push()
  }
 
}

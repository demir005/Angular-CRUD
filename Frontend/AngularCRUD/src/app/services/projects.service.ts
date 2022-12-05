import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Projects } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getAllProject(): Observable<Projects[]> {
    return this.http.get<Projects[]> (this.baseApiUrl + '/api/projects');
  }

  addProject(addProjectRequest: Projects): Observable<Projects> {
    return this.http.post<Projects>(this.baseApiUrl + '/api/projects',addProjectRequest);
  }

  getProject(id: string): Observable<Projects>{
    return this.http.get<Projects> (this.baseApiUrl + '/api/projects/'+id);
  }
}

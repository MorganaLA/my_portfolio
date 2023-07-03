import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: any;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.getData()
  }

  getData() {
    this.data.projects().subscribe(
      response => {
        this.projects = response.data.projects
      },
      error => { console.log(error) }
    )
  }
}

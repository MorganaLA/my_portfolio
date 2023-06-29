import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skillss: any;
  lenguages: any
  constructor(private data: DataService) { }

  ngOnInit() {
    this.getData()
  }

  getData() {
    this.data.skills().subscribe(
      response => {
        this.skillss = response.data.skills.skill,
        this.lenguages = response.data.skills.lenguages
      },
      error => { console.log(error) }
    )
  }
}

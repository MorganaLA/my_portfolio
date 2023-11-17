import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  hards: any;
  softs: any;
  lenguages: any;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.getData()
  }

  getData() {
    this.data.skills().subscribe(
      response => {
        this.hards = response.data.skills.hard,
        this.softs = response.data.skills.soft,
        this.lenguages = response.data.skills.lenguages
      },
      error => { console.log(error) }
    )
  }
}

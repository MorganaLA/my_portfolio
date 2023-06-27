import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit{
  studies:any
  constructor(private data:DataService){}
  
  ngOnInit(){
    this.getData()
  }

  getData(){
    this.data.studies().subscribe( 
      response => {console.log(response)},
      error => {console.log(error)}
    )
  }

}

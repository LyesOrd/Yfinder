import { Component, OnInit } from '@angular/core';
import { ApiListService } from './api-list.service';
import { compileNgModule } from '@angular/compiler';

@Component({
  selector: 'app-study-training-list',
  templateUrl: './study-training-list.component.html',
  styleUrls: ['./study-training-list.component.css']
})
export class StudyTrainingListComponent implements OnInit {

  public apiData: any;

  constructor(private api: ApiListService) { }

  ngOnInit(): void {
    this.api.getData().subscribe(data => {
      // Essayer de comprendre ce principe pour appliquer la même chose au autres API
      console.log(data)
      this.apiData = data.labelsAndRomes[0].rncps;
      console.log(this.apiData, 'apiData')
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Career } from '../models/career.model';
import { CareerService } from '../services/career.service';

@Component({
  selector: 'app-academic-career.list',
  templateUrl: './academic-career.list.component.html',
  styleUrls: ['./academic-career.list.component.scss']
})
export class AcademicCareerListComponent implements OnInit {

  careers!:Career[];
  
  constructor(private careerService:CareerService){}

  ngOnInit(): void {
    this.careers = this.careerService.getALLCareer();
    console.log(this.careers.length);
  }
}

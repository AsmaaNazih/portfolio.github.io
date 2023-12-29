import { Component, OnInit } from '@angular/core';
import { Experience } from '../models/experience.model';
import { ExperienceService } from '../services/experience.service';

@Component({
  selector: 'app-experiences-list',
  templateUrl: './experiences-list.component.html',
  styleUrls: ['./experiences-list.component.scss']
})
export class ExperiencesListComponent implements OnInit{
  experiences!: Experience[];
  
  constructor( private experienceService:ExperienceService){} 

  ngOnInit(): void {
    this.experiences = this.experienceService.getALLExperiences();
  }
}

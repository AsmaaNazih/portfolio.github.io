import { Component, Input, OnInit } from '@angular/core';
import { Experience } from '../models/experience.model'; 

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit{
 @Input() experience!: Experience;
 
 ngOnInit(): void {
    
 }

}

import { Component, Input, OnInit } from '@angular/core';
import { Career } from '../models/career.model';

@Component({
  selector: 'app-academic-career',
  templateUrl: './academic-career.component.html',
  styleUrls: ['./academic-career.component.scss']
})
export class AcademicCareerComponent implements OnInit {
  
 @Input() career!:Career;

  ngOnInit(): void {
    
  }
}

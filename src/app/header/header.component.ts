import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router){}

  onHome(){
    this.router.navigateByUrl('');
  } 

  onProjects(){
    this.router.navigateByUrl('projets');
  }
  
  onExperiences(){
    this.router.navigateByUrl('experiences');
  } 

  onSkills(){
    this.router.navigateByUrl('skills');
  } 

  onCareer(){
    this.router.navigateByUrl('career');
  } 

  onContact(){
    this.router.navigateByUrl('contact');
  } 

}

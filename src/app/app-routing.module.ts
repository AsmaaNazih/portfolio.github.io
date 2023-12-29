import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponentComponent } from './body-component/body-component.component';
import { ProjetsListComponent } from './projets-list/projets-list.component'; 
import { ExperiencesListComponent } from './experiences-list/experiences-list.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { AcademicCareerListComponent } from './academic-career.list/academic-career.list.component';

const routes: Routes = [
  {path: '', component: BodyComponentComponent},
  {path: 'projets', component: ProjetsListComponent}, 
  {path: 'experiences', component: ExperiencesListComponent}, 
  {path: 'contact', component: ContactComponent}, 
  {path: 'skills', component: SkillsComponent},
  {path: 'career', component: AcademicCareerListComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

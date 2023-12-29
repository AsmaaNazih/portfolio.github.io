import { NgModule } from '@angular/core';
import { BrowserModule, platformBrowser } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponentComponent } from './body-component/body-component.component';
import { ProjetsListComponent } from './projets-list/projets-list.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ExperienceComponent } from './experience/experience.component';
import { ExperiencesListComponent } from './experiences-list/experiences-list.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SkillsComponent } from './skills/skills.component';
import { AcademicCareerComponent } from './academic-career/academic-career.component';
import { AcademicCareerListComponent } from './academic-career.list/academic-career.list.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponentComponent,
    ProjetsListComponent,
    PortfolioComponent,
    ExperienceComponent,
    ExperiencesListComponent,
    ContactComponent,
    SkillsComponent,
    AcademicCareerComponent,
    AcademicCareerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { Projet } from '../models/projet.model';
import { ProjetService } from '../services/projet.service';

@Component({
  selector: 'app-projets-list',
  templateUrl: './projets-list.component.html',
  styleUrls: ['./projets-list.component.scss']
})
export class ProjetsListComponent implements OnInit{
  projets!: Projet[];

  constructor( private projetService: ProjetService){  }

  ngOnInit(): void {
      this.projets = this.projetService.getALLProjets();
  }
}

import { Injectable } from "@angular/core";
import { Projet } from "../models/projet.model";

@Injectable({
    providedIn: 'root'
})
export class ProjetService{

    projets: Projet[] = [
        {   
            id: 0,
            title:'EduCheck',
            language: ['JavaScript', 'NodeJs', 'JSON', 'Java', 'MongoDB'],
            description: " EduCheck est une application android destinée aux étudiants et enseignants souhaitant regrouper et simplifier leur relation sur des tâches communes telle qu'un accès rapide au planning, consultation des notes, envoyer un justificatif d'absence, envoyer des messages entre enseignants-étudiants",
            image:['assets/addNote.png', 'assets/addCourse.png', 'assets/messenger.png','assets/teacherPresent.png', 'assets/agenda.png'] 

        },    
        
        {   
            id: 1,
            title:'BreizhCoincoin',
            language: ['JavaScript', 'HTML', 'CSS', 'PHP', 'SQL'],
            description: "Création d'un site web e-commerce avec base de données SQL fullstack. Mise en place de divers catégories pour la mise en page de multiple annonces avec possibilité d'ajouter un filtre, un système de favoris, une recherche avancée pour les annonces, création de comptes membres ainsi qu'une page administrateur.",
            image:['assets/accueil.png', 'assets/annonces.png', 'assets/enregistrer.png'] 

        },

        {   
            id: 2,
            title:'Pokedemo',
            language: ['Angular','CSS','HTML', 'TypeScript'],
            description: " Pokedex développé en Angular représente une exploration approfondie des composants modulaires et réutilisables, de l'intégration de services et de l'utilisation d'API externes. Il témoigne de ma maîtrise du framework Angular, du TypeScript, ainsi que de mes compétences en gestion du data-binding et des appels API, donnant vie à des applications web dynamiques et fonctionnelles.",
            image:['assets/pokdemo.PNG', 'assets/Recherche.PNG', 'assets/Jeu.PNG'] 

        },

        {   
            id: 3,
            title:'La maison de bière',
            language: ['React','JavaScript','HTML','CSS'],
            description: " La Maison de Bière, une application ReactJS simplifiant l'achat des bières préférées des passionnés, dévoile ma maîtrise de ReactJS.",
            image:['assets/Bra.PNG','assets/Brasserie.png', 'assets/CatBrune.PNG'] 

        }
    ]

    getALLProjets(): Projet[]{
        return this.projets;
    }

    getProjetById(id:number): Projet {
        return this.projets[id];
    }
}
import { Injectable } from "@angular/core";
import { Experience } from "../models/experience.model";

@Injectable({
    providedIn: 'root'
})
export class ExperienceService{

    experiences: Experience[] = [
        
        {   
            id: 3,
            duree:'09/2023  07/2024',
            metier: "Animation Périscolaire",
            lieu: "Ecole élémentaire à Rennes (35)",
            description:"Animations d'activités, encadrement des temps de repos et de devoir, collaboration avec l'équipe éducative" 

        }
        ,
        {   
            id: 2,
            duree:'09/2022  07/2023',
            metier: "Animation Périscolaire",
            lieu: "Ecole élémentaire à Rennes (35)",
            description:"Animations d'activités, encadrement des temps de repos et de devoir, collaboration avec l'équipe éducative" 

        },

        {   
            id: 1,
            duree:'09/2021  07/2022',
            metier: "Animation Périscolaire",
            lieu: "Ecole élémentaire à Rennes (35)",
            description:"Animations d'activités, encadrement des temps de repos et de devoir, collaboration avec l'équipe éducative" 

        },

        {   
            id: 0,
            duree:'09/2020  07/2021',
            metier: "Animation Périscolaire",
            lieu: "Ecole élémentaire à Rennes (35)",
            description:"Animations d'activités, encadrement des temps de repos et de devoir, collaboration avec l'équipe éducative" 

        }
    ]

    getALLExperiences(): Experience[]{
        return this.experiences;
    }

    getExperienceById(id:number): Experience {
        return this.experiences[id];
    }
}
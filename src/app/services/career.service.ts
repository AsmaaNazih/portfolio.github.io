import { Injectable } from "@angular/core";
import { Career } from "../models/career.model";

@Injectable({
    providedIn: 'root'
})
export class CareerService{

    careers: Career[] = [
        {   
            id: 5,
            periode:'2023-2024',
            detail: "1 ère année Master Informatique parcours Ingénierie Logicielle",
            lieu: "Université de Rennes ",
        },

        {   
            id: 4,
            periode:'2022-2023',
            detail: "3 ème année Licence Informatique (Mention Bien)",
            lieu: "Université de Rennes ",
        },

        {   
            id: 3,
            periode:'2021-2022',
            detail: "2 ème année Licence Informatique",
            lieu: "Université de Rennes ",
        },

        {   
            id: 2,
            periode:'2020-2021',
            detail: "1 ère année Licence Mathématiques et application",
            lieu: "Université de Rennes ",
        },

        {   
            id: 1,
            periode:'2019-2020',
            detail: "1 ère année Licence Mathématiques et Informatique",
            lieu: "Université Gustave Eiffel",
        },

        {   
            id: 0,
            periode:'2018-2019',
            detail: "Baccalauréat scientifique (Mention Très bien)",
            lieu: "Lycée Ibn Yassine (Khouribga , Maroc)",
        }
    ]

    getALLCareer(): Career[]{
        return this.careers;
    }

    getCareerById(id:number): Career {
        return this.careers[id];
    }
}
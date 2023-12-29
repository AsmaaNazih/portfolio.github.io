import { trigger, state, style, transition, animate } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';  
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations:[
    trigger('listItem',[
      state('default', style({
        transform: 'scale(1)',
        'background-color': 'white',
        'z-index': 1
      })),
      state('active', style({
        transform: 'scale(1.05)',
        'background-color': 'rgb(201, 157, 242)',
        'z-index':2
      })),
      transition('default => active',[
        animate('100ms ease-in-out')
      ]),
      transition('active => default',[
        animate('500ms ease-in-out')
      ])
    ])
  ] 
})
export class ContactComponent implements OnInit{

  userMail!:string;
  userName!:string;
  text!:string;
  nameItemAnimation: 'default'| 'active' = 'active';

  constructor(private http:HttpClient){
  }  

  ngOnInit(): void {
    this.userMail = "";
    this.userName = "";
    this.text = "";
  }

  onSubmitForm(form:NgForm){
    const body ={"email": form.value.userMail, "subject": form.value.userName, "text" : form.value.text}; 
    this.http.post<any>('http://87.106.234.89:3000/api/sendMail', body).subscribe();
    this.userMail = "";
    this.userName = "";
    this.text = "";
  } 

}


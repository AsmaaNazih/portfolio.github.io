import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Projet } from '../models/projet.model'; 
import { interval, map, Observable, Subject, takeUntil } from 'rxjs'; 

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, OnDestroy{
  @Input() projet!: Projet;
  position!: number;
  interval$!: Observable<string>
  private destroy$!: Subject<boolean>;

  ngOnInit(): void {
    this.position = 0;
    this.destroy$ = new Subject<boolean>();
    this.interval$ = interval(1000).pipe(
      takeUntil(this.destroy$),
      map(value => this.projet.language[value%this.projet.language.length] )
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

  onBack(){
    if(this.position==0) 
      this.position = this.projet.image.length-1;
    else
      this.position--;
  } 

  onNext(){
    if(this.projet.image.length-1==this.position)
      this.position = 0;
    else
      this.position++;
  } 

}

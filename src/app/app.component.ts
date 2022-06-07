import { interval, Subscription } from 'rxjs';
import 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy{
    secondes?:number;
    counterSubscription?:Subscription;
constructor(){}
ngOnInit(){
    const counter=interval(1000);
    this.counterSubscription=counter.subscribe(
        (value:number)=>{
             this.secondes=value;
        }/*,
        (error:any)=>{
            console.log('Erreur');
        },
        ()=>{
            console.log('ok');
        }*/
    )
}
ngOnDestroy(){
    this.counterSubscription?.unsubscribe();
}
  
}

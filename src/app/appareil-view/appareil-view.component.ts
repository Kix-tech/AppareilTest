import { Subscription } from 'rxjs';
import { AppareilService } from './../services/appareil.services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {
//   appareilOne="Machine à laver";
//   appareilTwo="Télévision";
//   appareilT="Ordinateur";

  //lastUpdate=new Date();
  //async
  lastUpdate=new Promise<Date>(
    (resolve)=>{
        const date=new Date();
        setTimeout(()=>{
            resolve(date);
        },2000)
    }
);  
appareils:any;
appareilSubscription?:Subscription;
isAuth=false; 
ngOnInit(): void {
    //this.appareils=this.appareilService.appareils;
    this.appareilSubscription=this.appareilService.appareilSubject.subscribe(
        (appareils:any[])=>{
            this.appareils=appareils;
        });
        this.appareilService.emitAppareilSubject();
}
onAllumer(){
    this.appareilService.switchOnAll();
}
onEteindre(){
    this.appareilService.switchOffAll();
}
constructor(private appareilService:AppareilService){
  setTimeout(
      ()=>{
        this.isAuth=true;
    },4000
  )
}
onSave(){
    this.appareilService.saveAppareilOnServer();
}
onFetch(){
    this.appareilService.getAppareilOnServer();
}

}

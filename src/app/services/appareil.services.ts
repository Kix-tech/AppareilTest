import { Subject } from "rxjs";
import { HttpClient } from '@angular/common/http'
import { Injectable } from "@angular/core";

@Injectable()
export class AppareilService{
    appareilSubject= new Subject<any[]>(); 
    private appareils=[
        {
            id:1,
            name:"Machine à laver",
            status:"allumé"
        },
        {
            id:2,
            name:"Television",
            status:"éteint"
        },
        {
            id:3,
            name:"Ordinateur",
            status:"allumé"}
    ]
    constructor(private httpClient:HttpClient){}
    emitAppareilSubject(){
        this.appareilSubject.next(this.appareils.slice());
    }
    getAppareilById(id:number){
        const appareil=this.appareils.find(
            (appareilObject)=>{
                return appareilObject.id===id
            }
        );
        return appareil;
    }
    switchOnAll(){
        for(let appareil of this.appareils){
            appareil.status='allumé';
        }
        this.emitAppareilSubject();
    }
    switchOffAll(){
        for(let appareil of this.appareils){
            appareil.status='éteint';
        }
        this.emitAppareilSubject();
    }
    switchOnOne(index:any){
        this.appareils[index].status='allumé';
        this.emitAppareilSubject();
    }
    switchOffOne(index:any){
        this.appareils[index].status='éteint';
        this.emitAppareilSubject();
    }
    addAppareil(name:string,status:string){
        const appareilObject={
            id:0,
            name:'',
            status:''
        };
        appareilObject.name=name;
        appareilObject.status=status;
        appareilObject.id=this.appareils[(this.appareils.length - 1)].id+1;
        this.appareils.push(appareilObject);
        this.emitAppareilSubject();

    }
    saveAppareilOnServer(){
        this.httpClient.put('https://http-demo-client-dae52-default-rtdb.firebaseio.com/appareil.json',this.appareils)
                       .subscribe(
                           ()=>{
                               console.log('Enregistrement terminé');
                           },
                           (error)=>{
                               console.log('Echec'+error);
                               
                           }
                       )
    }
    getAppareilOnServer(){
        this.httpClient.get<any[]>('https://http-demo-client-dae52-default-rtdb.firebaseio.com/appareil.json')
                       .subscribe(
                           (response)=>{
                               this.appareils=response;
                               this.emitAppareilSubject();
                           },
                           (error)=>{
                               console.log('error'+error)
                           }
                       )
    }
}
import { AppareilService } from './../services/appareil.services';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  @Input() appareilName?:string;
  //appareilName="Machine à laver";
  @Input() appareilStatus?:string;
  @Input() idAppareil?:number;
  @Input()id?:number;
  color="";

  constructor(private appareilService:AppareilService) { }

  ngOnInit(): void {
  }
  getStatus(){
      return this.appareilStatus;
  }
  getColor(){
    if(this.appareilStatus==='allumé'){
        this.color='green';
    }else if(this.appareilStatus==='éteint'){
        this.color='red';
    }
    return this.color;
  }
  onAllumer(){
      this.appareilService.switchOnOne(this.idAppareil);
  }
  onEteindre(){
      this.appareilService.switchOffOne(this.idAppareil);
  }

}

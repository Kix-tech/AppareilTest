import { AppareilService } from './../services/appareil.services';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {
  name?:string="Appareil";
  status?:string="status";
  constructor(private appareilService:AppareilService,private route:ActivatedRoute) { }

  ngOnInit(): void {
      const id=this.name=this.route.snapshot.params['id'];
      this.name = this.appareilService.getAppareilById(+id)?.name;
      this.status= this.appareilService.getAppareilById(+id)?.status;
  }

}

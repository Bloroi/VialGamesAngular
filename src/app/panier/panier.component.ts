import { Component, OnInit } from '@angular/core';
import {JeuxvideoManagerService} from '../jeuxvideo-manager.service';
import {Jeuxvideo} from '../jeuxvideo';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  private listeJv : Jeuxvideo[] = [];

  constructor(public jvService: JeuxvideoManagerService) { }


  ngOnInit() {
    this.jvService.currentPanierList.subscribe(jeuxvideos => this.listeJv = jeuxvideos);
  }


  public deleteJvPanier(elt : number){
    this.listeJv.splice(elt,1);
    this.jvService.changePanierJv(this.listeJv);
  }

}

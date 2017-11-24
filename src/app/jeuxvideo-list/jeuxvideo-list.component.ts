import {Component, OnInit} from '@angular/core';
import {JeuxvideoManagerService} from '../jeuxvideo-manager.service';
import {Jeuxvideo} from '../jeuxvideo';

@Component({
  selector: 'app-jeuxvideo-list',
  templateUrl: './jeuxvideo-list.component.html',
  styleUrls: ['./jeuxvideo-list.component.css']
})
export class JeuxvideoListComponent implements OnInit {

  private jvs: Jeuxvideo[] = [];
  private itemPanier: Jeuxvideo[] = [];
  private typeFilterPrix = 0;
  private nombrePanier = 0;
  private prixPanier = 0.00;
  //Private member: Membre;


  constructor(public jvService: JeuxvideoManagerService) { }

  ngOnInit() {
    this.jvService
      .getAllJvsVisible(true)
      .subscribe(jvs => {
        this.jvs = Jeuxvideo.fromJSONs(jvs);
      });

      this.jvService.currentPanierList.subscribe(jeuxvideos => this.itemPanier = jeuxvideos);
      this.refreshDataPanier();

  }

  public addPanier(jv: Jeuxvideo){
  let nbOcc = 0;
    for (let i = 0; i < this.itemPanier.length; i++){

      if (this.itemPanier[i].id == jv.id) {
        nbOcc += 1;
      }
    }

    if (nbOcc < jv.stock) {

      this.itemPanier.push(jv);
      this.refreshDataPanier();
      this.jvService.changePanierJv(this.itemPanier);
    }else{
      alert('Vous ne pouvez pas acheter plus que le stock disponible !');
    }
  }

  public refreshDataPanier() {
    this.nombrePanier = this.itemPanier.length;
    this.prixPanier = 0.00;
    for (let i = 0; i < this.itemPanier.length; i++){
      this.prixPanier += this.itemPanier[i].prix;
    }
    this.prixPanier = parseFloat(this.prixPanier.toFixed(2));
  }


}

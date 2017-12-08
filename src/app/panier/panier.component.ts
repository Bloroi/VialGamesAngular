import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {JeuxvideoManagerService} from '../jeuxvideo-manager.service';
import {Jeuxvideo} from '../jeuxvideo';
import {ReservationEnCoursManagerService} from "../reservation-en-cours-manager.service";
import {PagePayementComponent} from "../page-payement/page-payement.component";
import {MembreConnecteService} from '../membre-connecte.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  private listeJv: Jeuxvideo[] = [];

  constructor(public jvService: JeuxvideoManagerService, public pagepayement: PagePayementComponent,
              public mcService: MembreConnecteService, public router: Router) { }


  ngOnInit() {

    if (this.mcService.getType() == '1') {
    }else {
      this.router.navigate(['/']);
    }

    this.jvService.currentPanierList.subscribe(jeuxvideos => this.listeJv = jeuxvideos);
  }

  public deleteJvPanier(elt: number) {
    this.listeJv.splice(elt, 1);
    this.jvService.changePanierJv(this.listeJv);
  }
}

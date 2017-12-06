import { Component, OnInit } from '@angular/core';
import {ReservationEnCours} from '../reservationEnCours';
import {ReservationFinie} from '../reservation-finie';
import {ReservationFinieManagerService} from '../reservation-finie-manager.service';
import {ReservationEnCoursManagerService} from '../reservation-en-cours-manager.service';

@Component({
  selector: 'app-modifier-mag-reservationencours',
  templateUrl: './modifier-mag-reservationencours.component.html',
  styleUrls: ['./modifier-mag-reservationencours.component.css']
})
export class ModifierMagReservationencoursComponent implements OnInit {

  private listeRe: ReservationEnCours[] = [];
  private newInnerWidth = window.innerWidth;
  private supprimerR: number;
  private rsF: ReservationFinie;

  constructor(public reService: ReservationEnCoursManagerService , public rfService: ReservationFinieManagerService) { }

  ngOnInit() {
    this.reService.getReservMembre(-1).subscribe(res => {
      this.listeRe = ReservationEnCours.fromJSONs(res);
    });
  }

  public GestionRes(index: number, etat: string)
  {
    this.rsF = new ReservationFinie();
    this.rsF.dateReservation = this.listeRe[index].dateReservation;
    this.rsF.dateLivraison = this.listeRe[index].dateLivraison;
    this.rsF.prixAchat = this.listeRe[index].prixAchat;
    this.rsF.etat = etat;
    this.rsF.idMembre = this.listeRe[index].membre.id;
    this.rsF.idJeuVideo = this.listeRe[index].jeuxvideo.id;
    this.rfService.createRE(this.rsF).subscribe(res => this.rsF.idReservation = ReservationFinie.fromJSON(res).idReservation);
    this.deleteRes(index);
  }


  public updateRes(r: ReservationEnCours) {
    this.reService.updateRE(r).subscribe();
  }

  public deleteRes(index: number){
    const DELETE_RE = () => this.listeRe.splice(index, 1);
    const DISPLAY_ERROR = (error) => console.error(error);
    this.reService.deleteRE(this.listeRe[index].idReservation).subscribe(DELETE_RE, DISPLAY_ERROR);
    this.reService.changeListeRE(this.listeRe);
  }
}

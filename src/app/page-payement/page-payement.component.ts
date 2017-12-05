import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Jeuxvideo} from "../jeuxvideo";
import {JeuxvideoManagerService} from "../jeuxvideo-manager.service";
import {ReservationEnCours} from "../reservationEnCours";
import {ReservationEnCoursManagerService} from "../reservation-en-cours-manager.service";
import {noProviderError} from "@angular/core/src/di/reflective_errors";
import {MembreConnecteService} from "../membre-connecte.service";
import {Membre} from "../membre";

@Component({
  selector: 'app-page-payement',
  templateUrl: './page-payement.component.html',
  styleUrls: ['./page-payement.component.css']
})
export class PagePayementComponent implements OnInit {

  private listeRe: ReservationEnCours[] = [];
  private listeJv: Jeuxvideo[] = [];

  constructor(public rfService: ReservationEnCoursManagerService,
              public jvService: JeuxvideoManagerService,
              public mcService: MembreConnecteService) { }


  @Output() private rfsChange: EventEmitter<ReservationEnCours[]> = new EventEmitter();

  ngOnInit() {
    this.rfService.currentList.subscribe(reservations => this.listeRe = reservations);
    this.jvService.currentPanierList.subscribe(jeuxvideos => this.listeJv = jeuxvideos);
  }

  public emitReservationFinie() {
    this.rfsChange.next(this.listeRe);
    this.rfService.changeListeRE(this.listeRe);
  }

  public payer(){
    for (let jv of this.listeJv){
      const tmpRf = new ReservationEnCours();
      let today = new Date();
      let dd = today.getDate();
      let mm = today.getMonth()+1;
      let yyyy = today.getFullYear();
      tmpRf.dateReservation = yyyy+"-"+mm+"-"+dd;
      dd = dd + 5;
      if (dd > 30) {
        if (mm === 4 || mm === 6 || mm === 9 || mm === 11){
          dd = dd-30;
          mm = mm+1;
          if(mm>12){
            mm=1;
            yyyy=yyyy+1;
          }
        }else if(mm === 2){
          dd = dd-28;
          mm = mm+1;
          if(mm>12){
            mm=1;
            yyyy=yyyy+1;
          }
        }else if(dd>31){
          dd = dd-31;
          mm = mm+1;
          if(mm>12){
            mm=1;
            yyyy=yyyy+1;
          }
        }
      }
      tmpRf.dateLivraison = yyyy+"-"+mm+"-"+dd;
      tmpRf.prixAchat = jv.prix;
      tmpRf.idMembre = this.mcService.getMembre().id;
      tmpRf.idJeuVideo = jv.id;
      this.listeRe.push(tmpRf);
      this.rfService.createRE(tmpRf).subscribe(re => tmpRf.idReservation = ReservationEnCours.fromJSON(re).idReservation);
      this.jvService.changePanierJv([]);
      jv.stock -= 1;
      this.updateJeuxvideo(jv);
    }
  }

  public updateJeuxvideo(jv: Jeuxvideo) {
    this.jvService.updateJv(jv).subscribe();
  }

}

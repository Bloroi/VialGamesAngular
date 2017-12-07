import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Jeuxvideo} from "../jeuxvideo";
import {JeuxvideoManagerService} from "../jeuxvideo-manager.service";
import {ReservationEnCours} from "../reservationEnCours";
import {ReservationEnCoursManagerService} from "../reservation-en-cours-manager.service";
import {noProviderError} from "@angular/core/src/di/reflective_errors";
import {MembreConnecteService} from "../membre-connecte.service";
import {Membre} from "../membre";
import {FormControl} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-payement',
  templateUrl: './page-payement.component.html',
  styleUrls: ['./page-payement.component.css']
})
export class PagePayementComponent implements OnInit {

  private listeRe: ReservationEnCours[] = [];
  private listeJv: Jeuxvideo[] = [];
  private cardNum: number;
  private sum: number;
  private num: number;

  constructor(public rfService: ReservationEnCoursManagerService,
              public jvService: JeuxvideoManagerService,
              public mcService: MembreConnecteService,
              public router: Router) { }


  @Output() private rfsChange: EventEmitter<ReservationEnCours[]> = new EventEmitter();

  ngOnInit() {
    this.rfService.currentList.subscribe(reservations => this.listeRe = reservations);
    this.jvService.currentPanierList.subscribe(jeuxvideos => this.listeJv = jeuxvideos);
  }

  public emitReservationFinie() {
    this.rfsChange.next(this.listeRe);
    this.rfService.changeListeRE(this.listeRe);
  }

  public payer() {
    if(this.checkCardNum(this.cardNum)) {
      for (let jv of this.listeJv) {
        const tmpRf = new ReservationEnCours();
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        let yyyy = today.getFullYear();
        tmpRf.dateReservation = yyyy + "-" + mm + "-" + dd;
        dd = dd + 5;
        if (dd > 30) {
          if (mm === 4 || mm === 6 || mm === 9 || mm === 11) {
            dd = dd - 30;
            mm = mm + 1;
            if (mm > 12) {
              mm = 1;
              yyyy = yyyy + 1;
            }
          } else if (mm === 2) {
            dd = dd - 28;
            mm = mm + 1;
            if (mm > 12) {
              mm = 1;
              yyyy = yyyy + 1;
            }
          } else if (dd > 31) {
            dd = dd - 31;
            mm = mm + 1;
            if (mm > 12) {
              mm = 1;
              yyyy = yyyy + 1;
            }
          }
        }
        tmpRf.dateLivraison = yyyy + "-" + mm + "-" + dd;
        tmpRf.prixAchat = jv.prix;
        tmpRf.idMembre = this.mcService.getMembre().id;
        tmpRf.idJeuVideo = jv.id;
        this.listeRe.push(tmpRf);
        this.rfService.createRE(tmpRf).subscribe(re => tmpRf.idReservation = ReservationEnCours.fromJSON(re).idReservation);
        this.jvService.changePanierJv([]);
        jv.stock -= 1;
        this.updateJeuxvideo(jv);
        this.router.navigate([""]);
      }
    }else{
      alert("num invalid");
    }
  }

  public updateJeuxvideo(jv: Jeuxvideo){
    this.jvService.updateJv(jv).subscribe();
  }

  public getLastNum(){
    let tmp1 = this.num % 10;
    this.num = (this.num - tmp1) / 2;
    return tmp1;
  }

  public checkCardNum(siret: number){
    alert("checking");
    let estValide;
    this.num = siret;
    // Donc le SIRET est un numérique à 14 chiffres
    // Les 9 premiers chiffres sont ceux du SIREN (ou RCS), les 4 suivants
    // correspondent au numéro d'établissement
    // et enfin le dernier chiffre est une clef de LUHN.
    let somme = 0;
    let tmp;
    for (let cpt = 0; cpt < siret.toString().length; cpt++) {
      if ((cpt % 2) === 0) {
        tmp = this.getLastNum();
        tmp = tmp * 2;
        if (tmp > 9) {
          tmp = tmp - 9;
        }
      }else {
        tmp = this.getLastNum()
      }
      this.sum = this.sum + tmp;
      alert(this.sum);
    }
    if ((this.sum % 10) === 0) {
      estValide = true; // Si la somme est un multiple de 10 alors le SIRET est valide
    }else {
      estValide = false;
    }
    return estValide;
  }
}

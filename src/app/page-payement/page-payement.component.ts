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
  private tmpPropri: string;
  private tmpCVV: string;
  private tmpCardNum: string;

  constructor(public rfService: ReservationEnCoursManagerService,
              public jvService: JeuxvideoManagerService,
              public mcService: MembreConnecteService,
              public router: Router) { }


  @Output() private rfsChange: EventEmitter<ReservationEnCours[]> = new EventEmitter();

  ngOnInit() {
    if (this.mcService.getType() == '1') {
    }else {
      this.router.navigate(['/']);
    }


    this.rfService.currentList.subscribe(reservations => this.listeRe = reservations);
    this.jvService.currentPanierList.subscribe(jeuxvideos => this.listeJv = jeuxvideos);

    if (this.listeJv.length === 0) {
      this.router.navigate(['/']);
    }
  }

  public emitReservationFinie() {
    this.rfsChange.next(this.listeRe);
    this.rfService.changeListeRE(this.listeRe);
  }

  public payer() {
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
        alert("Votre commande a été validée avec succès ! Votre commande arrivera dans les plus brefs délais.");
        this.refreshChamps();
        this.router.navigate([""]);
      }
  }

  public updateJeuxvideo(jv: Jeuxvideo){
    this.jvService.updateJv(jv).subscribe();
  }

  public refreshChamps()
  {
    this.tmpPropri="";
    this.tmpCVV="";
    this.tmpCardNum="";
  }}

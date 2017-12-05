import { Component, OnInit } from '@angular/core';
import {ReservationEnCours} from "../reservationEnCours";
import {ReservationEnCoursManagerService} from "../reservation-en-cours-manager.service";
import {Jeuxvideo} from "../jeuxvideo";
import {MembreConnecteService} from "../membre-connecte.service";
import {Membre} from "../membre";

@Component({
  selector: 'app-page-reserv-en-cours',
  templateUrl: './page-reserv-en-cours.component.html',
  styleUrls: ['./page-reserv-en-cours.component.css']
})
export class PageReservEnCoursComponent implements OnInit {

  private listeRe: ReservationEnCours[] = [];

  constructor(public reService: ReservationEnCoursManagerService, public mcService: MembreConnecteService) {}

  ngOnInit( ) {
    this.reService.getReservMembre( this.mcService.getMembre().id).subscribe(res => {
      this.listeRe = ReservationEnCours.fromJSONs(res);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import {ReservationEnCours} from "../reservationEnCours";
import {ReservationEnCoursManagerService} from "../reservation-en-cours-manager.service";
import {Jeuxvideo} from "../jeuxvideo";

@Component({
  selector: 'app-page-reserv-en-cours',
  templateUrl: './page-reserv-en-cours.component.html',
  styleUrls: ['./page-reserv-en-cours.component.css']
})
export class PageReservEnCoursComponent implements OnInit {

  private listeRe: ReservationEnCours[] = [];

  constructor(public reService: ReservationEnCoursManagerService) {}

  ngOnInit( ) {
    this.reService.get(1).subscribe(res => {
      this.listeRe = ReservationEnCours.fromJSONs(res);
    });
  }

}

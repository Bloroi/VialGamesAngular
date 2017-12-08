import {Component, HostListener, OnInit} from '@angular/core';
import {ReservationEnCours} from "../reservationEnCours";
import {ReservationEnCoursManagerService} from "../reservation-en-cours-manager.service";
import {Jeuxvideo} from "../jeuxvideo";
import {MembreConnecteService} from "../membre-connecte.service";
import {Membre} from "../membre";
import {ReservationFinieManagerService} from '../reservation-finie-manager.service';
import {ReservationFinie} from '../reservation-finie';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-reserv-en-cours',
  templateUrl: './page-reserv-en-cours.component.html',
  styleUrls: ['./page-reserv-en-cours.component.css']
})
export class PageReservEnCoursComponent implements OnInit {

  private listeRe: ReservationEnCours[] = [];
  private listeRf: ReservationFinie[] = [];
  private newInnerWidth = window.innerWidth;

  constructor(public reService: ReservationEnCoursManagerService, public mcService: MembreConnecteService , public rfService: ReservationFinieManagerService,public router: Router) {}

  ngOnInit( ) {

    if (this.mcService.getType() == '1') {
    }else {
      this.router.navigate(['/']);
    }

    this.reService.getReservMembre( this.mcService.getMembre().id).subscribe(res => {
      this.listeRe = ReservationEnCours.fromJSONs(res);
    });
    this.rfService.getReservMembre( this.mcService.getMembre().id).subscribe(res => {
      this.listeRf = ReservationFinie.fromJSONs(res);
    });


  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.newInnerWidth = event.target.innerWidth;
  }

}

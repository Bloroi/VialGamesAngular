import {Component, HostListener, OnInit} from '@angular/core';
import {MembreConnecteService} from '../membre-connecte.service';
import {ReservationFinieManagerService} from '../reservation-finie-manager.service';
import {ReservationFinie} from '../reservation-finie';
import {Router} from '@angular/router';

@Component({
  selector: 'app-afficher-mag-reservation-finie',
  templateUrl: './afficher-mag-reservation-finie.component.html',
  styleUrls: ['./afficher-mag-reservation-finie.component.css']
})
export class AfficherMagReservationFinieComponent implements OnInit {

  private listeRf: ReservationFinie[] = [];
  private newInnerWidth = window.innerWidth;

  constructor( public mcService: MembreConnecteService , public rfService: ReservationFinieManagerService,public router: Router) {}

  ngOnInit( ) {

    if (this.mcService.getType() == '3' || this.mcService.getType() == '2') {
    }else {
      this.router.navigate(['/']);
    }

    this.rfService.getReservMembre(-1).subscribe(res => {
      this.listeRf = ReservationFinie.fromJSONs(res);
    });

  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.newInnerWidth = event.target.innerWidth;
  }


}

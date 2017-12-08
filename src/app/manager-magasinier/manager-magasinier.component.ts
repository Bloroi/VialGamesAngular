import { Component, OnInit } from '@angular/core';
import {MembreConnecteService} from '../membre-connecte.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-manager-magasinier',
  templateUrl: './manager-magasinier.component.html',
  styleUrls: ['./manager-magasinier.component.css']
})
export class ManagerMagasinierComponent implements OnInit {

  constructor(public mcService: MembreConnecteService, public router: Router) { }

  ngOnInit() {

    if (this.mcService.getType() == '2') {
    }else {
      this.router.navigate(['/']);
    }
  }

}

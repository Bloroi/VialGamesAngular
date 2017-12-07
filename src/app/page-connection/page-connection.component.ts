import { Component, OnInit } from '@angular/core';
import {Membre} from '../membre';
import {MembreManagerService} from '../membre-manager.service';
import {TokenManagerService} from '../token-manager.service';
import {Router} from '@angular/router';
import {MembreConnecteService} from '../membre-connecte.service';

@Component({
  selector: 'app-page-connection',
  templateUrl: './page-connection.component.html',
  styleUrls: ['./page-connection.component.css']
})
export class PageConnectionComponent implements OnInit {

  private username: string;
  private password: string;

  constructor(public tService: TokenManagerService,
              public mService: MembreManagerService,
              public router: Router,
              public mcService: MembreConnecteService
  ) {}

  ngOnInit() {
  }

  public connecter() {
    this.tService.connect(this.username, this.password).subscribe(token => {
      if (token[0] === '0') {
        alert('Username et Mot de passe invalide.');
      }else {
        localStorage.setItem('token', token[1]);
        localStorage.setItem('type', token[0]);
        switch (token[0]){
          case '1': this.mcService.setMembre(); break;
          case '2': this.mcService.setAdmin(); break;
          case '3': this.mcService.setMagasinier(); break;
        }
        this.router.navigate(['']);
        window.location.reload();
      }
    });
  }

}

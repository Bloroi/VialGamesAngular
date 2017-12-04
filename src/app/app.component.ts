import { Component } from '@angular/core';
import {MembreConnecteService} from "./membre-connecte.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public mcService: MembreConnecteService, public router: Router){
  }

  public deconnecter(){
    localStorage.setItem("token", "");
    localStorage.setItem("type", "0");
    localStorage.setItem("username", "");
    localStorage.setItem("password", "");
    this.mcService.setType("0");
    this.mcService.setMembre(null);
    this.router.navigate([""]);
  }
}

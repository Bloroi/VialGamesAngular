import { Component, OnInit } from '@angular/core';
import {MembreConnecteService} from "../membre-connecte.service";
import {MembreManagerService} from "../membre-manager.service";
import {Membre} from "../membre";
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-mon-compte',
  templateUrl: './page-mon-compte.component.html',
  styleUrls: ['./page-mon-compte.component.css']
})
export class PageMonCompteComponent implements OnInit {
  private id: number;
  private username: string;
  private password: string;
  private nom: string;
  private prenom: string;
  private dateDeNaissance: string;
  private email: string;
  private tel: string;
  private localite: string;
  private cp: number;
  private adresse: string;

  constructor(public mcService: MembreConnecteService, public mService: MembreManagerService, public router: Router){
    this.mcService.construireMembre();
  }

  ngOnInit(){
    if (this.mcService.getType() == '1') {
    }else {
      this.router.navigate(['/']);
    }

    this.id = this.mcService.getMembre().id;
    this.username = this.mcService.getMembre().username;
    this.password = this.mcService.getMembre().password;
    this.nom = this.mcService.getMembre().nom;
    this.prenom = this.mcService.getMembre().prenom;
    this.dateDeNaissance = this.mcService.getMembre().dateDeNaissance;
    this.email = this.mcService.getMembre().email;
    this.tel = this.mcService.getMembre().tel;
    this.localite = this.mcService.getMembre().localite;
    this.cp = this.mcService.getMembre().cp;
    this.adresse = this.mcService.getMembre().adresse;
  }

  public update(){
    const m = new Membre();
    m.id = this.id;
    m.username = this.username;
    m.password = this.password;
    m.nom = this.nom;
    m.prenom = this.prenom;
    m.dateDeNaissance = this.dateDeNaissance;
    m.email = this.email;
    m.tel = this.tel;
    m.localite = this.localite;
    m.cp = this.cp;
    m.adresse = this.adresse;
    this.mService.updateM(m).subscribe();
    this.mcService.updateMembre(m);
  }
}

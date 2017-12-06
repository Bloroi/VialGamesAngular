import { Component, OnInit } from '@angular/core';
import {MembreConnecteService} from "../membre-connecte.service";
import {MembreManagerService} from "../membre-manager.service";
import {Membre} from "../membre";

@Component({
  selector: 'app-page-mon-compte',
  templateUrl: './page-mon-compte.component.html',
  styleUrls: ['./page-mon-compte.component.css']
})
export class PageMonCompteComponent implements OnInit {

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

  constructor(public mcService: MembreConnecteService, public mService: MembreManagerService){
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

  ngOnInit() {
  }

  updateMembre(){
    const tmpM = new Membre();
    tmpM.username = this.username;
    tmpM.password = this.password;
    tmpM.nom = this.nom;
    tmpM.prenom = this.prenom;
    tmpM.dateDeNaissance = this.dateDeNaissance;
    tmpM.email = this.email;
    tmpM.tel = this.tel;
    tmpM.localite = this.localite;
    tmpM.cp = 1111;
    tmpM.adresse = this.adresse;
    this.mService.updateM(tmpM).subscribe();
  }

}

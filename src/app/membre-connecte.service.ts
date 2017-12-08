import { Injectable } from '@angular/core';
import { Membre} from './membre';
import {MembreManagerService} from './membre-manager.service';
import {Administrateur} from './administrateur';
import {Magasinier} from './magasinier';
import {MagasinierManagerService} from './magasinier-manager.service';
import {AdministrateurManagerService} from './administrateur-manager.service';

@Injectable()
export class MembreConnecteService {

  private membreConnecte: Membre;
  private adminConnecte: Administrateur;
  private magasinierConnecte: Magasinier;
  private type: string;
  // 0 = invité // déconnecté
  // 1 = membre
  // 2 = Admin
  // 3 = Magasinier

  constructor(public mService: MembreManagerService, public magService: MagasinierManagerService, public adService: AdministrateurManagerService) {
    this.type = '0';
   if (localStorage.getItem('type') === '1') {
     this.construireMembre();
   }else if(localStorage.getItem('type') === '2') {
     this.construireAd();
   }
   else if(localStorage.getItem('type') === '3') {
     this.construireMag();
   }
  }

  public setMembre() {
    this.mService.get(localStorage.getItem('username'), localStorage.getItem('password')).subscribe(m => {
      this.membreConnecte = (Membre.fromJSON(m));
      this.type = localStorage.getItem('type');
      localStorage.setItem('id', this.membreConnecte.id.toString());
      localStorage.setItem('username', this.membreConnecte.username);
      localStorage.setItem('password', this.membreConnecte.password);
      localStorage.setItem('nom', this.membreConnecte.nom);
      localStorage.setItem('prenom', this.membreConnecte.prenom);
      localStorage.setItem('dateDeNaissance', this.membreConnecte.dateDeNaissance);
      localStorage.setItem('email', this.membreConnecte.email);
      localStorage.setItem('tel', this.membreConnecte.tel);
      localStorage.setItem('localite', this.membreConnecte.localite);
      localStorage.setItem('cp', this.membreConnecte.cp.toString());
      localStorage.setItem('adresse', this.membreConnecte.adresse);
    });
  }

  public setMagasinier() {
    this.magService.get(localStorage.getItem('username'), localStorage.getItem('password')).subscribe(m => {
      this.magasinierConnecte = (Magasinier.fromJSON(m));
      this.type = localStorage.getItem('type');
      localStorage.setItem('id', this.magasinierConnecte.id.toString());
      localStorage.setItem('username', this.magasinierConnecte.username);
      localStorage.setItem('password', this.magasinierConnecte.password);
      localStorage.setItem('tel', this.magasinierConnecte.tel);
      localStorage.setItem('email', this.magasinierConnecte.email);
    });
  }

  public setAdmin() {
    this.adService.get(localStorage.getItem('username'), localStorage.getItem('password')).subscribe(m => {
      this.adminConnecte = (Administrateur.fromJSON(m));
      this.type = localStorage.getItem('type');
      localStorage.setItem('id', this.adminConnecte.id.toString());
      localStorage.setItem('username', this.adminConnecte.username);
      localStorage.setItem('password', this.adminConnecte.password);
      localStorage.setItem('email', this.adminConnecte.email);
    });
  }

  public construireAd(){
    const m = new Administrateur();
    m.id = parseInt(localStorage.getItem('id'));
    m.username = localStorage.getItem('username');
    m.password = localStorage.getItem('password');
    m.email = localStorage.getItem('email');
    this.adminConnecte = m;
    this.type = localStorage.getItem('type');
  }

  public construireMag(){
    const m = new Magasinier();
    m.id = parseInt(localStorage.getItem('id'));
    m.username = localStorage.getItem('username');
    m.password = localStorage.getItem('password');
    m.tel = localStorage.getItem('tel');
    m.email = localStorage.getItem('email');
    this.magasinierConnecte = m;
    this.type = localStorage.getItem('type');
  }

  public construireMembre(){
    const m = new Membre();
    m.id = parseInt(localStorage.getItem('id'));
    m.username = localStorage.getItem('username');
    m.password = localStorage.getItem('password');
    m.nom = localStorage.getItem('nom');
    m.prenom = localStorage.getItem('prenom');
    m.dateDeNaissance = localStorage.getItem('dateDeNaissance');
    m.email = localStorage.getItem('email');
    m.tel = localStorage.getItem('tel');
    m.localite = localStorage.getItem('localite');
    m.cp = parseInt(localStorage.getItem('cp'));
    m.adresse = localStorage.getItem('adresse');
    this.membreConnecte = m;
    this.type = localStorage.getItem('type');
  }

  public updateMembre(m: Membre){
    this.membreConnecte = m;
    localStorage.setItem('id', this.membreConnecte.id.toString());
    localStorage.setItem('username', this.membreConnecte.username);
    localStorage.setItem('password', this.membreConnecte.password);
    localStorage.setItem('nom', this.membreConnecte.nom);
    localStorage.setItem('prenom', this.membreConnecte.prenom);
    localStorage.setItem('dateDeNaissance', this.membreConnecte.dateDeNaissance);
    localStorage.setItem('email', this.membreConnecte.email);
    localStorage.setItem('tel', this.membreConnecte.tel);
    localStorage.setItem('localite', this.membreConnecte.localite);
    localStorage.setItem('cp', this.membreConnecte.cp.toString());
    localStorage.setItem('adresse', this.membreConnecte.adresse);
  }

  public delMembre(){
    this.membreConnecte = null;
    this.type = '0';
    localStorage.setItem('type', '0');

  }

  public delMag(){
    this.magasinierConnecte = null;
    this.type = '0';
    localStorage.setItem('type', '0');
  }

  public delAd(){
    this.adminConnecte = null;
    this.type = '0';
    localStorage.setItem('type', '0');
  }

  public getMembre(): Membre{
    return this.membreConnecte;
  }

  public getMag(): Magasinier{
    return this.magasinierConnecte;
  }
  public getAd(): Administrateur{
    return this.adminConnecte;
  }

  public setType(t: string){
    this.type = t;
  }



  public getType(): string{
    return this.type;
  }
}

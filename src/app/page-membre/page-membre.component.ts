import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MembreManagerService} from '../membre-manager.service';
import {Membre} from '../membre';

@Component({
  selector: 'app-page-membre',
  templateUrl: './page-membre.component.html',
  styleUrls: ['./page-membre.component.css']
})
export class PageMembreComponent implements OnInit {

  private membre: Membre;
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
  private mbrs: Membre[] = [];

  @Output() private mbrsChange: EventEmitter<Membre[]> = new EventEmitter();

  constructor(public membreService: MembreManagerService) { }

  ngOnInit() {
    this.membreService
      .getAllM()
      .subscribe(mbrs => {
        this.mbrs = Membre.fromJSONs(mbrs);
        this.emitMembre();
      });
  }

  public emitMembre() {
    this.mbrsChange.next(this.mbrs);
    this.membreService.changeListeM(this.mbrs);
  }

  public createMembre() {
    const tmpJv = new Membre();
    tmpJv.nom = this.nom;
    tmpJv.prenom = this.prenom;
    tmpJv.username = this.username;
    tmpJv.password = this.password;
    tmpJv.dateDeNaissance = this.dateDeNaissance;
    tmpJv.email = this.email;
    tmpJv.tel = this.tel;
    tmpJv.localite = this.localite;
    tmpJv.cp = this.cp;
    tmpJv.adresse = this.adresse;
    this.mbrs.push(tmpJv);
    this.membreService.createM(tmpJv).subscribe(mbr => tmpJv.id = Membre.fromJSON(mbr).id);
    this.effacerChamp();
    this.emitMembre();
  }

  public effacerChamp() {
    this.username = '';
    this.password = '';
    this.nom = '';
    this.prenom = '';
    this.dateDeNaissance = '';
    this.email = '';
    this.tel = '';
    this.localite = '';
    this.cp = 0;
    this.adresse = '';
  }
}

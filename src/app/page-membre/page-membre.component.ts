import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MembreManagerService} from '../membre-manager.service';
import {Membre} from '../membre';
import {FormControl} from "@angular/forms";
import 'rxjs';

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

  private usernameValidity: string;
  private emailValidity: string;

  @Output() private mbrsChange: EventEmitter<Membre[]> = new EventEmitter();

  constructor(public membreService: MembreManagerService) {
    this.usernameValidity="form-group";
    this.emailValidity="form-group";
  }

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
    let validity;
    this.membreService.checkValidity(this.username, this.email).subscribe(valid => validity = valid);
    if(validity === 0) {
      this.emailValidity = "form-group";
      this.usernameValidity = "form-group";
      const tmpJv = new Membre();
      tmpJv.username = this.username;
      tmpJv.password = this.password;
      tmpJv.nom = this.nom;
      tmpJv.prenom = this.prenom;
      tmpJv.dateDeNaissance = this.dateDeNaissance;
      tmpJv.email = this.email;
      tmpJv.tel = this.tel;
      tmpJv.localite = this.localite;
      tmpJv.cp = this.cp;
      tmpJv.adresse = this.adresse;
      this.membreService.createM(tmpJv).subscribe(mbr => tmpJv.id = Membre.fromJSON(mbr).id);
      this.effacerChamp();
    }else if(validity === 1){
      this.usernameValidity = "form-group has-error";
      this.emailValidity = "form-group";
    }else if(validity === 2){
      this.emailValidity = "form-group has-error";
      this.usernameValidity = "form-group";
    }else if(validity === 3){
      this.usernameValidity = "form-group has-error";
      this.emailValidity = "form-group has-error";
    }
    alert("cc");
  }

  public effacerChamp() {
    alert("effacer");
    this.username = '';
    this.password = '';
    this.nom = '';
    this.prenom = '';
    this.dateDeNaissance = null;
    this.email = '';
    this.tel = '';
    this.localite = '';
    this.cp = 0;
    this.adresse = '';
  }

  public getUsernameValidity(){
    return this.usernameValidity;
  }

  public getEmailValidity(){
    return this.emailValidity;
  }
}

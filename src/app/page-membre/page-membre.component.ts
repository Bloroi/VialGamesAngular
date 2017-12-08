import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MembreManagerService} from '../membre-manager.service';
import {Membre} from '../membre';
import {FormControl} from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-membre',
  templateUrl: './page-membre.component.html',
  styleUrls: ['./page-membre.component.css']
})
export class PageMembreComponent implements OnInit {

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
  private disableUsername: boolean;
  private disableEmail: boolean;

  private usernameValidity: string;
  private emailValidity: string;

  @Output() private mbrsChange: EventEmitter<Membre[]> = new EventEmitter();

  constructor(public membreService: MembreManagerService, public router: Router) {
  }

  ngOnInit() {
    this.usernameValidity = 'form-group';
    this.emailValidity = 'form-group';
    this.disableUsername = true;
    this.disableEmail = true;
  }

  public checkValidityUsername(){
    this.membreService.checkValidityUsername(this.username).subscribe(valid => {
      if (valid !== true){
        this.usernameValidity = 'form-group has-error has-feedback';
        this.disableUsername = false;
      }else{
        this.usernameValidity = 'form-group';
        this.disableUsername = true;
      }
    });
  }

  public checkValidityEmail(){
    this.membreService.checkValidityEmail(this.email).subscribe(valid => {
      if (valid !== true){
        this.emailValidity = 'form-group has-error has-feedback';
        this.disableEmail = false;
      }else{
        this.emailValidity = 'form-group';
        this.disableEmail = true;
      }
    });
  }

  public getDisable(): boolean{
    if (this.disableUsername && this.disableEmail){
      return true;
    }else{
      return false;
    }
  }

  public createMembre() {
    this.emailValidity = 'form-group';
    this.usernameValidity = 'form-group';
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
      this.router.navigate([""]);
  }

  public effacerChamp() {
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

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Membre} from '../membre';
import {MembreManagerService} from '../membre-manager.service';
import {MembreConnecteService} from '../membre-connecte.service';

@Component({
  selector: 'app-modif-mdp-membre',
  templateUrl: './modif-mdp-membre.component.html',
  styleUrls: ['./modif-mdp-membre.component.css']
})
export class ModifMdpMembreComponent implements OnInit {

  private membre: Membre;
  private vieuxmdp: string;
  private nouveaumdp: string;
  private nouveaumdp2: string;

  constructor(public mService: MembreManagerService, public mcService: MembreConnecteService) { }

  ngOnInit() {
    this.membre = this.mcService.getMembre();
  }


  public updateAdmin(){
    if (this.membre.password == this.vieuxmdp){
      if (this.nouveaumdp == this.nouveaumdp2){
        this.membre.password = this.nouveaumdp;
        this.mService.updateM(this.membre).subscribe();
        alert('Le mot de passe a été modifié avec succès !');
        this.effacerChamps();
      }else{
        alert('Le mot de passe n\'est pas identique !');
      }

    }else{
      alert('L\'ancien mot de passe n\'est pas valide !');
    }

  }

  public effacerChamps(){
    this.nouveaumdp = '';
    this.nouveaumdp2 = '';
    this.vieuxmdp = '';
  }
}


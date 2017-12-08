import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AdministrateurManagerService} from '../administrateur-manager.service';
import {Administrateur} from '../administrateur';
import {MembreConnecteService} from "../membre-connecte.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.css']
})
export class PageAdminComponent implements OnInit {

  private admin: Administrateur;
  private vieuxmdp: string;
  private nouveaumdp: string;
  private nouveaumdp2: string;

  constructor(public adminService: AdministrateurManagerService, public mcService: MembreConnecteService, public router: Router) { }

  ngOnInit() {
    if (this.mcService.getType() == '2') {
    }else {
      this.router.navigate(['/']);
    }


    this.admin=this.mcService.getAd();

  }

  public updateAdmin(){
    if (this.admin.password == this.vieuxmdp){
      if (this.nouveaumdp == this.nouveaumdp2){
        this.admin.password = this.nouveaumdp;
        this.adminService.updateAdmin(this.admin).subscribe();
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
    this.nouveaumdp ='';
    this.nouveaumdp2 ='';
    this.vieuxmdp = '';
  }
}

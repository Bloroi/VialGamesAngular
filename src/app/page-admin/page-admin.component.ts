import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AdministrateurManagerService} from '../administrateur-manager.service';
import {Administrateur} from '../administrateur';

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

  @Output() private adminChange: EventEmitter<Administrateur> = new EventEmitter();

  constructor(public adminService: AdministrateurManagerService) { }

  ngOnInit() {
    this.adminService
      .getAdmin(1)
      .subscribe(admin => {
        this.admin = Administrateur.fromJSON(admin);
        this.emitAdmin();
      });
  }

  public emitAdmin(){
    this.adminChange.next(this.admin);
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

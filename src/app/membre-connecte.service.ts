import { Injectable } from '@angular/core';
import { Membre} from "./membre";
import {MembreManagerService} from "./membre-manager.service";
import {Administrateur} from "./administrateur";
import {Magasinier} from "./magasinier";

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

  constructor(public mService: MembreManagerService) {
    if(localStorage.getItem('type') == null || localStorage.getItem('type') == "0"){
      this.type="0";
    }else {
      this.mService.get(localStorage.getItem('username'), localStorage.getItem("password")).subscribe(m => {
        this.setMembre(Membre.fromJSON(m));
      });
      this.type=localStorage.getItem("type");
    }
  }

  public setMembre(m: Membre){
    this.membreConnecte = m;
  }

  public getMembre(): Membre{
    return this.membreConnecte;
  }

  public setType(t: string){
    this.type = t;
  }

  public getType(): string{
    return this.type;
  }
}

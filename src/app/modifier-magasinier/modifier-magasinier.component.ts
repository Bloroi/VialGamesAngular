import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Magasinier} from '../magasinier';
import {MagasinierManagerService} from '../magasinier-manager.service';
import {MembreConnecteService} from '../membre-connecte.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-modifier-magasinier',
  templateUrl: './modifier-magasinier.component.html',
  styleUrls: ['./modifier-magasinier.component.css']
})
export class ModifierMagasinierComponent implements OnInit {

  private mags: Magasinier[] = [];
  private supprimerR : number;

  @Output() private magsChange: EventEmitter<Magasinier[]> = new EventEmitter();

  constructor(public magService: MagasinierManagerService,
              public mcService: MembreConnecteService, public router: Router) { }

  ngOnInit() {

    if (this.mcService.getType() == '2') {
    }else {
      this.router.navigate(['/']);
    }

    this.magService.currentList.subscribe(jvs => this.mags = jvs);

  }

  public updateMagasinier(mag: Magasinier) {
    this.magService.updateM(mag).subscribe();
  }

  public deleteMagasinier(index:number){
    const DELETE_M = () =>this.mags.splice(index,1);
    const DISPLAY_ERROR = (error) => console.error(error);
    //this.jvs.splice(index,1);
    this.magService.deleteM(this.mags[index].id).subscribe(DELETE_M,DISPLAY_ERROR);
    this.magService.changeListeM(this.mags);
  }
}

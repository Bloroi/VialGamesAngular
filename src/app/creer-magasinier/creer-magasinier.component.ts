import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Magasinier} from '../magasinier';
import {MagasinierManagerService} from '../magasinier-manager.service';

@Component({
  selector: 'app-creer-magasinier',
  templateUrl: './creer-magasinier.component.html',
  styleUrls: ['./creer-magasinier.component.css']
})
export class CreerMagasinierComponent implements OnInit {

  private tmpUsername:string;
  private tmpPassword:string;
  private tmpTel:string;
  private tmpEmail:string;
  private mags: Magasinier[] = [];

  @Output() private magsChange: EventEmitter<Magasinier[]> = new EventEmitter();

  constructor(public magService: MagasinierManagerService) { }

  ngOnInit() {
    this.magService
      .getAllM()
      .subscribe(mags => {
        this.mags = Magasinier.fromJSONs(mags);
        this.emitMagasiniers();
      });
  }

  public emitMagasiniers(){
    this.magsChange.next(this.mags);
    this.magService.changeListeM(this.mags);
  }

  public createMagasinier(){
    const tmpM = new Magasinier();
    tmpM.username = this.tmpUsername;
    tmpM.password = this.tmpPassword
    tmpM.tel = this.tmpTel;
    tmpM.email = this.tmpEmail;
    this.mags.push(tmpM);
    this.magService.createM(tmpM).subscribe(mag => tmpM.id = Magasinier.fromJSON(mag).id);
    this.effacerChamp();
    this.emitMagasiniers();
  }

  public effacerChamp() {
    this.tmpUsername = '';
    this.tmpPassword = '';
    this.tmpTel = '';
    this.tmpEmail = '';
  }


}

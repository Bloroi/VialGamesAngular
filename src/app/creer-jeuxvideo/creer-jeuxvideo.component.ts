import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Jeuxvideo} from '../jeuxvideo';
import {JeuxvideoManagerService} from '../jeuxvideo-manager.service';

@Component({
  selector: 'app-creer-jeuxvideo',
  templateUrl: './creer-jeuxvideo.component.html',
  styleUrls: ['./creer-jeuxvideo.component.css']
})
export class CreerJeuxvideoComponent implements OnInit {

  private tmpNom: string;
  private tmpEditeur: string;
  private tmpTypes: string;
  private tmpDeveloppeur: string;
  private tmpSortie: string;
  private tmpGenres: string;
  private tmpTheme: string;
  private tmpPrix: number = 0.00;
  private tmpDescription: string;
  private tmpUrlImage: string;
  private tmpStock: number;
  private jvs: Jeuxvideo[] = [];

  @Output() private jvsChange: EventEmitter<Jeuxvideo[]> = new EventEmitter();

  constructor(public jvService: JeuxvideoManagerService) { }

  ngOnInit() {
    this.jvService
      .getAllJvs()
      .subscribe(jvs => {
        this.jvs = Jeuxvideo.fromJSONs(jvs);
        this.emitJeuxvideos();
      });

    this.jvService.currentList.subscribe(listjvs => this.jvs = listjvs);

  }

  public emitJeuxvideos() {
    this.jvsChange.next(this.jvs);
    this.jvService.changeListeJv(this.jvs);
  }

  public createJeuxvideo() {
    const tmpJv = new Jeuxvideo();
    tmpJv.nom = this.tmpNom;
    tmpJv.editeur = this.tmpEditeur;
    tmpJv.types = this.tmpTypes;
    tmpJv.developpeur = this.tmpDeveloppeur;
    tmpJv.sortie = this.tmpSortie;
    tmpJv.genres = this.tmpGenres;
    tmpJv.theme = this.tmpTheme;
    tmpJv.prix = this.tmpPrix;
    tmpJv.description = this.tmpDescription;
    tmpJv.urlImage = this.tmpUrlImage;
    tmpJv.stock = this.tmpStock;
    this.jvs.push(tmpJv);
    this.jvService.createJv(tmpJv).subscribe(jv => tmpJv.id = Jeuxvideo.fromJSON(jv).id);
    this.effacerChamp();
    this.emitJeuxvideos();
  }

  public effacerChamp() {
    this.tmpNom = '';
    this.tmpEditeur = '';
    this.tmpTypes = '';
    this.tmpDeveloppeur = '';
    this.tmpSortie = '';
    this.tmpGenres = '';
    this.tmpTheme = '';
    this.tmpPrix = 0.00;
    this.tmpDescription = '';
    this.tmpUrlImage = '';
    this.tmpStock = 0;
  }


}

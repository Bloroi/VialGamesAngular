import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {JeuxvideoManagerService} from '../jeuxvideo-manager.service';
import {Jeuxvideo} from '../jeuxvideo';

@Component({
  selector: 'app-jeuxvideo-list',
  templateUrl: './jeuxvideo-list.component.html',
  styleUrls: ['./jeuxvideo-list.component.css']
})
export class JeuxvideoListComponent implements OnInit {

  private tmpNom: string;
  private tmpEditeur: string;
  private tmpTypes: string;
  private tmpDeveloppeur: string;
  private tmpSortie: string;
  private tmpGenres: string;
  private tmpTheme: string;
  private tmpPrix: number;
  private tmpDescription: string;
  private tmpUrlImage: string;
  private jvs: Jeuxvideo[] = [];


  @Output() private jvsChange: EventEmitter<Jeuxvideo[]> = new EventEmitter();

  constructor(public jvService: JeuxvideoManagerService) { }

  ngOnInit() {
    this.jvService
      .getAllJvs()
      .subscribe(jvs => {
        this.jvs = Jeuxvideo.fromJSONs(jvs);
        this.emitJvs();
      });
  }

  public emitJvs(){
    this.jvsChange.next(this.jvs);
  }

  public createJv(){
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
    this.jvs.push(tmpJv);
    this.jvService.createJv(tmpJv).subscribe(jv => tmpJv.id = Jeuxvideo.fromJSON(jv).id);
    this.effacerChamp();
    this.emitJvs();
  }


  public effacerChamp() {
    this.tmpNom = '';
    this.tmpEditeur = '';
    this.tmpTypes = '';
    this.tmpDeveloppeur = '';
    this.tmpSortie = '';
    this.tmpGenres = '';
    this.tmpTheme = '';
    this.tmpPrix = 0;
    this.tmpDescription = '';
    this. tmpUrlImage = '';
  }


}

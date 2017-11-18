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
  private tmpPrix: number = 0.00;
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
        this.emitJeuxvideos();
      });
  }

  public emitJeuxvideos(){
    this.jvsChange.next(this.jvs);
  }

  public createJeuxvideo(){
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
    this.emitJeuxvideos();
  }

  public updateJeuxvideo(jv: Jeuxvideo) {
    this.jvService.updateJv(jv).subscribe();
}

  public deleteJeuxvideo(index:number){
    const DELETE_JV = () =>this.jvs.splice(index,1);
    const DISPLAY_ERROR = (error) => console.error(error);
    //this.jvs.splice(index,1);
    this.jvService.deleteJv(this.jvs[index].id).subscribe(DELETE_JV,DISPLAY_ERROR);
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
    this. tmpUrlImage = '';
  }


}

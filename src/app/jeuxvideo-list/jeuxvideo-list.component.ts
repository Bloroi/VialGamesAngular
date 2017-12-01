import {Component, HostListener, OnInit} from '@angular/core';
import {JeuxvideoManagerService} from '../jeuxvideo-manager.service';
import {Jeuxvideo} from '../jeuxvideo';
//import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-jeuxvideo-list',
  templateUrl: './jeuxvideo-list.component.html',
  styleUrls: ['./jeuxvideo-list.component.css']
})
export class JeuxvideoListComponent implements OnInit {

  private jvs: Jeuxvideo[] = [];
  private itemPanier: Jeuxvideo[] = [];
  private nombrePanier = 0;
  private prixPanier = 0.00;
  private newInnerWidth = window.innerWidth;
  //Private member: Membre;

  //filtres
  private typeFilterPrix = 0;
  private searchFilter = '';

  stateCtrl: FormControl;
  filteredStates: Observable<any[]>;



  constructor(public jvService: JeuxvideoManagerService) {
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
      .startWith(null)
      .map(state => state ? this.filterStates(state) : this.jvs.slice());

  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.newInnerWidth = event.target.innerWidth;
  }


  filterStates(name: string) {
    return this.jvs.filter(state =>
      state.nom.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  ngOnInit() {
    this.jvService
      .getAllJvsVisible(true)
      .subscribe(jvs => {
        this.jvs = Jeuxvideo.fromJSONs(jvs);
      });

      this.jvService.currentPanierList.subscribe(jeuxvideos => this.itemPanier = jeuxvideos);
      this.refreshDataPanier();

  }

  public addPanier(jv: Jeuxvideo){
  let nbOcc = 0;
    for (let i = 0; i < this.itemPanier.length; i++){

      if (this.itemPanier[i].id == jv.id) {
        nbOcc += 1;
      }
    }

    if (nbOcc < jv.stock) {

      this.itemPanier.push(jv);
      this.refreshDataPanier();
      this.jvService.changePanierJv(this.itemPanier);
    }else{
      alert('Vous ne pouvez pas acheter plus que le stock disponible !');
    }
  }

  public refreshDataPanier() {
    this.nombrePanier = this.itemPanier.length;
    this.prixPanier = 0.00;
    for (let i = 0; i < this.itemPanier.length; i++){
      this.prixPanier += this.itemPanier[i].prix;
    }
    this.prixPanier = parseFloat(this.prixPanier.toFixed(2));
  }


}

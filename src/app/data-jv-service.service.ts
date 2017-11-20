import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Jeuxvideo} from './jeuxvideo';

@Injectable()
export class DataJvServiceService {

  private listJv = new BehaviorSubject<Jeuxvideo[]>([]);
  currentList = this.listJv.asObservable();

  constructor() { }

  changeListeJv(listeJv: Jeuxvideo[]){
    this.listJv.next(listeJv);
  }


}

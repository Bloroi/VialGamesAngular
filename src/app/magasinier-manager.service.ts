import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Magasinier} from './magasinier';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {HttpParams} from '@angular/common/http';

@Injectable()
export class MagasinierManagerService {


  private listM = new BehaviorSubject<Magasinier[]>([]);
  currentList = this.listM.asObservable();

  constructor(public http: Http) { }

  public getAllM(): Observable<Magasinier[]>{
    return this.http.get("http://localhost:56469/api/magasinier").map(response=>response.json());
  }

  public createM(m : Magasinier) : Observable<Magasinier>{
    return this.http.post("http://localhost:56469/api/magasinier", m.getCleanDataForSending()).map(response => response.json());
  }

  public deleteM(id:number):Observable<any>{
    return this.http.delete("http://localhost:56469/api/magasinier",{
      params: new HttpParams().set("id",id+'').toString()
    });
  }

  public updateM(m : Magasinier) : Observable<any>{
    return this.http.put("http://localhost:56469/api/magasinier", m.getCleanDataForSending());
  }

  changeListeM(listeM: Magasinier[]){
    this.listM.next(listeM);
  }


}

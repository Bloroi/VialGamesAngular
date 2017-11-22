import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Magasinier} from './magasinier';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class MagasinierManagerService {


  private listM = new BehaviorSubject<Magasinier[]>([]);
  currentList = this.listM.asObservable();

  constructor(public http: HttpClient) { }

  public getAllM(): Observable<Magasinier[]>{
    return this.http.get("http://localhost:56469/api/magasinier");
  }

  public createM(m : Magasinier) : Observable<Magasinier>{
    return this.http.post("http://localhost:56469/api/magasinier", m.getCleanDataForSending());
  }

  public deleteM(id:number):Observable<any>{
    return this.http.delete<string>("http://localhost:56469/api/magasinier",{
      params: new HttpParams().set("id",id+'')
    });
  }

  public updateM(m : Magasinier) : Observable<any>{
    return this.http.put("http://localhost:56469/api/magasinier", m.getCleanDataForSending());
  }

  changeListeM(listeM: Magasinier[]){
    this.listM.next(listeM);
  }


}

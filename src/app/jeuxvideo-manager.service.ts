import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Jeuxvideo} from './jeuxvideo';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class JeuxvideoManagerService {

  private listJv = new BehaviorSubject<Jeuxvideo[]>([]);
  currentList = this.listJv.asObservable();

  private panierJv = new BehaviorSubject<Jeuxvideo[]>([]);
  currentPanierList = this.panierJv.asObservable();



  constructor(public http:HttpClient) { }

  public get(id:number): Observable<Jeuxvideo>{
    return this.http.get("http://localhost:56469/api/jeuxvideo/"+id);
  }

  public getAllJvs(): Observable<Jeuxvideo[]>{
    return this.http.get("http://localhost:56469/api/jeuxvideo");
  }

  public createJv(jv : Jeuxvideo) : Observable<Jeuxvideo>{
    return this.http.post("http://localhost:56469/api/jeuxvideo",jv.getCleanDataForSending());
  }

  public deleteJv(id:number):Observable<any>{
    return this.http.delete<string>("http://localhost:56469/api/jeuxvideo",{
      params: new HttpParams().set("id",id+'')
    });
  }

  public updateJv(jv : Jeuxvideo) : Observable<any>{
    return this.http.put("http://localhost:56469/api/jeuxvideo",jv.getCleanDataForSending());
  }

  changeListeJv(listeJv: Jeuxvideo[]){
    this.listJv.next(listeJv);
  }

  changePanierJv(panier: Jeuxvideo[]){
    this.panierJv.next(panier);
  }

}

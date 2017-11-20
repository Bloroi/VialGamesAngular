import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Jeuxvideo} from './jeuxvideo';
import {HttpParams} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class JeuxvideoManagerService {

  private listJv = new BehaviorSubject<Jeuxvideo[]>([]);
  currentList = this.listJv.asObservable();

  constructor(public http:Http) { }

  public getAllJvs(): Observable<Jeuxvideo[]>{
    return this.http.get("http://localhost:56469/api/jeuxvideo").map(response=>response.json());
  }

  public createJv(jv : Jeuxvideo) : Observable<Jeuxvideo>{
    return this.http.post("http://localhost:56469/api/jeuxvideo",jv.getCleanDataForSending()).map(response => response.json());
  }

  public deleteJv(id:number):Observable<any>{
    return this.http.delete("http://localhost:56469/api/jeuxvideo",{
      params: new HttpParams().set("id",id+'').toString()
    });
  }

  public updateJv(jv : Jeuxvideo) : Observable<any>{
    return this.http.put("http://localhost:56469/api/jeuxvideo",jv.getCleanDataForSending());
  }

  changeListeJv(listeJv: Jeuxvideo[]){
    this.listJv.next(listeJv);
  }

}

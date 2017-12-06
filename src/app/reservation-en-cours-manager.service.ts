import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {ReservationEnCours} from './reservationEnCours';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Jeuxvideo} from "./jeuxvideo";

@Injectable()
export class ReservationEnCoursManagerService {


  private listeRE = new BehaviorSubject<ReservationEnCours[]>([]);
  currentList = this.listeRE.asObservable();

  private listeJv = new BehaviorSubject<Jeuxvideo[]>([]);
  currentListJv = this.listeJv.asObservable();

  constructor(public http: HttpClient) { }

  public get(type: number, idMembre: number): Observable<ReservationEnCours[]>{
    return this.http.get("http://localhost:56469/api/ReservationEnCours?type="+type+"&id="+idMembre);
  }

  public getReservMembre(idMembre : number): Observable<ReservationEnCours[]>{
    return this.http.get("http://localhost:56469/api/ReservationEnCours?idMembre=" + idMembre);
  }

  public getAllRE(): Observable<ReservationEnCours[]>{
    return this.http.get("http://localhost:56469/api/ReservationEnCours");
  }

  public createRE(re : ReservationEnCours) : Observable<ReservationEnCours>{
    return this.http.post("http://localhost:56469/api/ReservationEnCours", re.getCleanDataForSending());
  }

  public deleteRE(id:number):Observable<any>{
    return this.http.delete<string>("http://localhost:56469/api/reservationEnCours",{
      params: new HttpParams().set("id",id+'')
    });
  }

  public updateRE(r : ReservationEnCours) : Observable<any>{
    return this.http.put("http://localhost:56469/api/reservationEnCours", r.getCleanDataForSending());
  }

  changeListeRE(listeRF: ReservationEnCours[]){
    this.listeRE.next(listeRF);
  }




}

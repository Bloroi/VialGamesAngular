import { Injectable } from '@angular/core';
import {ReservationFinie} from './reservation-finie';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ReservationFinieManagerService {

  constructor(public http: HttpClient) { }

  public get(type: number, idMembre: number): Observable<ReservationFinie[]>{
    return this.http.get("http://localhost:56469/api/ReservationFinie?type="+type+"&id="+idMembre);
  }

  public getReservMembre(idMembre : number): Observable<ReservationFinie[]>{
    return this.http.get("http://localhost:56469/api/ReservationFinie?idMembre=" + idMembre);
  }

  public getAllRE(): Observable<ReservationFinie[]>{
    return this.http.get("http://localhost:56469/api/ReservationFinie");
  }

  public createRE(re : ReservationFinie) : Observable<ReservationFinie>{
    return this.http.post("http://localhost:56469/api/ReservationFinie", re.getCleanDataForSending());
  }

  public deleteRE(id:number):Observable<any>{
    return this.http.delete<string>("http://localhost:56469/api/ReservationFinie",{
      params: new HttpParams().set("id",id+'')
    });
  }

  public updateRE(r : ReservationFinie) : Observable<any>{
    return this.http.put("http://localhost:56469/api/ReservationFinie", r.getCleanDataForSending());
  }


}

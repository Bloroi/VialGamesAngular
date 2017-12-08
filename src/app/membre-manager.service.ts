import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Membre} from './membre';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class MembreManagerService {


  private listM = new BehaviorSubject<Membre[]>([]);
  currentList = this.listM.asObservable();

  constructor(public http: HttpClient) { }

  public getAllM(): Observable<Membre[]>{
    return this.http.get('http://localhost:56469/api/membre');
  }

  public get(username: string, password: string): Observable<Membre>{
    return this.http.get('http://localhost:56469/api/membre?username=' + username + '&password=' + password);
  }

  public checkValidityUsername(username: string): Observable<boolean> {
    return this.http.get('http://localhost:56469/api/Membre?type=1&chaine=' + username);
  }

  public checkValidityEmail(email: string): Observable<boolean> {
    return this.http.get('http://localhost:56469/api/membre?type=2&chaine=' + email);
  }

  public createM(m: Membre): Observable<Membre>{
    return this.http.post('http://localhost:56469/api/membre', m.getCleanDataForSending());
  }

  public deleteM(id: number): Observable<any>{
    return this.http.delete<string>('http://localhost:56469/api/membre', {
      params: new HttpParams().set('id', id + '')
    });
  }

  public updateM(m: Membre): Observable<any>{
    return this.http.put('http://localhost:56469/api/membre', m.getCleanDataForSending());
  }

  changeListeM(listeM: Membre[]){
    this.listM.next(listeM);
  }


}

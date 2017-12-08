import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Administrateur} from './administrateur';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class AdministrateurManagerService {


  constructor(public http:HttpClient) { }

  public getAllAdmin(): Observable<Administrateur[]>{
    return this.http.get("http://localhost:56469/api/administrateur");
  }

  public get(username: string, password: string): Observable<Administrateur>{
    return this.http.get('http://localhost:56469/api/administrateur?username=' + username + '&password=' + password);
  }

  public getAdmin(id : number): Observable<Administrateur>{
    return this.http.get("http://localhost:56469/api/administrateur/"+id);
  }

  public createAdmin(admin : Administrateur) : Observable<Administrateur>{
    return this.http.post("http://localhost:56469/api/administrateur",admin.getCleanDataForSending());
  }

  public deleteAdmin(id:number):Observable<any>{
    return this.http.delete<string>("http://localhost:56469/api/administrateur",{
      params: new HttpParams().set("id",id+'')
    });
  }

  public updateAdmin(admin : Administrateur) : Observable<any>{
    return this.http.put("http://localhost:56469/api/administrateur",admin.getCleanDataForSending());
  }


}

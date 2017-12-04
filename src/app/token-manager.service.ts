import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {Membre} from "./membre";
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class TokenManagerService {

  constructor(public http: HttpClient) { }

  public connect(username: string, password: string): Observable<string[]>{
    return this.http.get("http://localhost:56469/api/token?username="+username+"&password="+password);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {User } from './user-form/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _url = "http://localhost:3080/data/item";

  constructor(private http: HttpClient) { }
  getUser(): Observable<User[]>{
    return this.http.get<User[]>(this._url)
  };
}

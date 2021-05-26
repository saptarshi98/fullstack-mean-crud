import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { User } from './user-form/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubmitService {

  constructor(private _http: HttpClient) { }

  private _url = 'http://localhost:3080/data/item';

  submit(user: User){
    return this._http.post(this._url, user)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  _url="http://localhost:3000/enroll";
  constructor(private _http:HttpClient) { }

  enroll(user:User)
  {
  return this._http.post<any>(this._url,user);
  }
}

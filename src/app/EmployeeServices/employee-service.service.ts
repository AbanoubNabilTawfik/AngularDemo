import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IEmployee } from '../Interfaces/IEmpolyee';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  _url: string = "/assets/data/employees.json";
  constructor(private _http: HttpClient) { }

  getAllEmployees(): Observable<IEmployee[]> {
    return this._http.get<IEmployee[]>(this._url).pipe(
      catchError(
        (err) => {
          return throwError(err.message || "Server Issue Please contact site adminstrator");
        }
      )
    )
  }

  getEmployeeById(id: number) {

  }


}

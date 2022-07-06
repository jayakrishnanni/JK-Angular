import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subscription} from 'rxjs'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap} from "rxjs/operators";
import { throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  // Use https://corona.lmao.ninja/v2/all API to

  getDashboard() : Observable<any> {
    return this.http.get<any>('https://corona.lmao.ninja/v2/all',{})
      .pipe(
        tap(data => {
            console.log(`getSiteInfo Request Success ${data} `);
        }),
        catchError(this.handleError));
  }

  getCountriesCases() {
    return this.http.get<any>('https://corona.lmao.ninja/v2/countries',{})
      .pipe(
        tap(data => {
          console.log(`getSiteInfo Request Success ${data} `);
        }),
        catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {

    let errorMessage = '';

    if (err&&err.status) {
      errorMessage = `site.service Server returned code: ${err.status}, error message is: ${err.message}`;
    } else {
      errorMessage = `site.service Server returned error: `+err;
    }

    return throwError(errorMessage);
  }
}

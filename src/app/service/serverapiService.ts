import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError, pipe, Subject } from 'rxjs';
import { catchError, tap, map, retry, takeUntil } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServerapiService {
  myApiUrl: string;
  myApiDocUrl: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'cache-control': 'no-cache',
    })
  };

  constructor(private http: HttpClient)
   {
    this.myApiUrl = environment.apiUrl;
    }

  getUser(): Observable<any> {
    const url = this.myApiUrl + `users`;
    return this.http.get<any>(url,this.httpOptions).pipe(
      retry(1),
      tap(data => console.log(data)),
      catchError(this.errorHandler)
    );
  }


  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}

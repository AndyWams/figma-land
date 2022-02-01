import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private httpOptions: any;
  private baseUrl = environment.googleSheetUrl;
  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('REFRESH_TOKEN')}`,
      }),
    };
  }

  createContact(model: any): Observable<any> {
    const url =
      this.baseUrl +
      `/${environment.ContactSpreadsheet_ID}/values/A1:append?valueInputOption=RAW`;
    if (model === null) {
      return;
    }
    return this.http.post<any>(url, model, this.httpOptions).pipe(
      map((status) => status),
      catchError(this.handleError)
    );
  }
  createNewsletter(model: any): Observable<any> {
    const url =
      this.baseUrl +
      `/${environment.newsletterSpreadsheet_ID}/values/A1:append?valueInputOption=RAW`;
    if (model === null) {
      return;
    }
    return this.http.post<any>(url, model, this.httpOptions).pipe(
      map((status) => status),
      catchError(this.handleError)
    );
  }

  getFreshToken(params: object): Observable<any> {
    const url = 'https://www.googleapis.com/oauth2/v4/token';
    return this.http.post<any>(url, params, this.httpOptions).pipe(
      map((res: any) => {
        this.setRefreshToken(res.access_token);
      }),
      catchError(this.handleError)
    );
  }
  setRefreshToken(token: any): void {
    localStorage.setItem('REFRESH_TOKEN', token);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please refresh the page and try again later.'
    );
  }
}

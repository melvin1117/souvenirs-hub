import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { throwError, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SnackbarConfig } from 'src/app/configs/snackbar-config';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomSnackbarComponent } from 'src/app/shared/components/custom-snackbar/custom-snackbar.component';
import { CONSTANTS } from 'src/app/shared/constants/constant';
import { EventListenerService } from 'src/app/shared/services/event-listener/event-listener.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  baseURL = environment.baseURL;

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private eventListenerService: EventListenerService
  ) {}

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was:` + error.message
      );
    }
    this.eventListenerService.updateLoadingStatus(false);
    this.snackBar.openFromComponent(
      CustomSnackbarComponent,
      SnackbarConfig.getErrorSnackbarConfig(CONSTANTS.DEFAULT_ERROR_MSG)
    );
    // return an observable with a user-facing error message
    return throwError(error);
  }

  get(path: string, params?: any): Observable<any> {
    if (params) {
      return this.http
        .get(this.baseURL + path, { params })
        .pipe(catchError(this.handleError.bind(this)));
    } else {
      return this.http
        .get(this.baseURL + path)
        .pipe(catchError(this.handleError.bind(this)));
    }
  }

  put(path: string, body: any, params?: any): Observable<any> {
    if (params) {
      return this.http
        .put(this.baseURL + path, body, { params })
        .pipe(catchError(this.handleError.bind(this)));
    } else {
      return this.http
        .put(this.baseURL + path, body)
        .pipe(catchError(this.handleError.bind(this)));
    }
  }

  post(path: string, body: any, config?: any): Observable<any> {
    if (config) {
      return this.http
        .post(this.baseURL + path, body, config)
        .pipe(catchError(this.handleError.bind(this)));
    } else {
      return this.http
        .post(this.baseURL + path, body)
        .pipe(catchError(this.handleError.bind(this)));
    }
  }

  delete(path: string): Observable<any> {
    return this.http
      .delete(this.baseURL + path)
      .pipe(catchError(this.handleError.bind(this)));
  }
}

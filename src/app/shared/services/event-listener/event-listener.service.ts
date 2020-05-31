import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventListenerService {
  private loaderSource = new BehaviorSubject(false);
  loader$ = this.loaderSource.asObservable();

  constructor() {}

  updateLoadingStatus(status: boolean) {
    this.loaderSource.next(status);
  }
}

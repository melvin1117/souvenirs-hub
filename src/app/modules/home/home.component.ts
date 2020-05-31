import { Component, OnInit } from '@angular/core';
import { EventListenerService } from 'src/app/shared/services/event-listener/event-listener.service';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'sh-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLoading$: Observable<boolean>;

  constructor(private eventListenerService: EventListenerService) {}

  ngOnInit(): void {
    this.isLoading$ = this.eventListenerService.loader$.pipe(delay(0));
  }
}

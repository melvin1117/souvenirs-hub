import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrashTabConfig } from 'src/app/configs/trash-tab-config';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'sh-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss'],
})
export class TrashComponent implements OnInit, OnDestroy {
  links: any[] = TrashTabConfig.tabs;
  activeLink = this.links[0].route;
  subscriptions: Subscription[] = [];
  constructor(private router: Router) {
    this.subscriptions.push(
      this.router.events.subscribe(() => {
        const splittedURL = this.router.url.split('/');
        this.activeLink = `./${splittedURL[splittedURL.length - 1]}`;
      })
    );
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }
}

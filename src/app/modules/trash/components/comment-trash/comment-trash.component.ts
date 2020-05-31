import { Component, OnInit, OnDestroy } from '@angular/core';
import { MODE, MODULE, MENU_OPTION } from 'src/app/shared/enum/shared-enum';
import { Subscription } from 'rxjs';
import { SharedDataService } from 'src/app/shared/services/shared-data/shared-data.service';
import { Comment } from 'src/app/shared/interfaces/comments';
import { EventListenerService } from 'src/app/shared/services/event-listener/event-listener.service';

@Component({
  selector: 'sh-comment-trash',
  templateUrl: './comment-trash.component.html',
  styleUrls: ['./comment-trash.component.scss'],
})
export class CommentTrashComponent implements OnInit, OnDestroy {
  comments: Comment[];
  mode = MODE.TRASH;
  module = MODULE.COMMENT;

  subscriptions: Subscription[] = [];
  constructor(
    private sharedDataService: SharedDataService,
    private eventListenerService: EventListenerService
  ) {}

  ngOnInit(): void {
    this.getComments();
  }

  getComments() {
    this.updateLoadingStatus(true);
    this.subscriptions.push(
      this.sharedDataService
        .getCommentsByDeleteCondition(true)
        .subscribe((response: Comment[]) => {
          this.comments = response;
          this.updateLoadingStatus(false);
        })
    );
  }

  updateLoadingStatus(status: boolean) {
    this.eventListenerService.updateLoadingStatus(status);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }
}

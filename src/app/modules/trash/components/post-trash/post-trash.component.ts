import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/shared/interfaces/posts';
import { MODE, MENU_OPTION } from 'src/app/shared/enum/shared-enum';
import { SharedDataService } from 'src/app/shared/services/shared-data/shared-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EventListenerService } from 'src/app/shared/services/event-listener/event-listener.service';
import { CONSTANTS } from 'src/app/shared/constants/constant';
import { CustomSnackbarComponent } from 'src/app/shared/components/custom-snackbar/custom-snackbar.component';
import { SnackbarConfig } from 'src/app/configs/snackbar-config';
import { EmittedMenuSelection } from 'src/app/shared/interfaces/shared';
import { Utility } from 'src/app/shared/utils/utility';

@Component({
  selector: 'sh-post-trash',
  templateUrl: './post-trash.component.html',
  styleUrls: ['./post-trash.component.scss'],
})
export class PostTrashComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  posts: Post[];
  mode = MODE.TRASH;

  constructor(
    private sharedDataService: SharedDataService,
    private snackBar: MatSnackBar,
    private eventListenerService: EventListenerService
  ) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.updateLoadingStatus(true);
    this.subscriptions.push(
      this.sharedDataService
        .getPostsByDeleteCondition(true)
        .subscribe((response) => {
          this.posts = response;
          this.updateLoadingStatus(false);
        })
    );
  }
  onMenuClick(event: EmittedMenuSelection) {
    this.updateLoadingStatus(true);
    switch (event.option) {
      case MENU_OPTION.DELETE:
        this.deletePost(event.id);
        break;
      case MENU_OPTION.RESTORE:
        this.restore(event.id, Utility.getObjById(event.id, this.posts, 'id'));
        break;
    }
  }

  restore(id: number, post: Post) {
    post.isDeleted = false;
    this.subscriptions.push(
      this.sharedDataService.updatePostById(id, post).subscribe((response) => {
        this.showSuccessSnackbar(CONSTANTS.POST_RESTORED_SUCCESSFULLY);
        this.getPosts();
      })
    );
  }

  deletePost(id: number) {
    this.subscriptions.push(
      this.sharedDataService.deletePost(id).subscribe((response) => {
        this.showSuccessSnackbar(CONSTANTS.POST_DELETE_SUCCESSFULLY);
        this.getPosts();
      })
    );
  }

  showSuccessSnackbar(message: any) {
    this.snackBar.openFromComponent(
      CustomSnackbarComponent,
      SnackbarConfig.getSuccessSnackbarConfig(message)
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

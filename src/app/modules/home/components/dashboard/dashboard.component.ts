import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/shared/interfaces/posts';
import { MODE, MENU_OPTION } from 'src/app/shared/enum/shared-enum';
import { SharedDataService } from 'src/app/shared/services/shared-data/shared-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomSnackbarComponent } from 'src/app/shared/components/custom-snackbar/custom-snackbar.component';
import { SnackbarConfig } from 'src/app/configs/snackbar-config';
import { CONSTANTS } from 'src/app/shared/constants/constant';
import { EventListenerService } from 'src/app/shared/services/event-listener/event-listener.service';
import { EmittedMenuSelection } from 'src/app/shared/interfaces/shared';
import { Router } from '@angular/router';
import { Utility } from 'src/app/shared/utils/utility';

@Component({
  selector: 'sh-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  posts: Post[];
  mode = MODE.VIEW;
  constructor(
    private sharedDataService: SharedDataService,
    private snackBar: MatSnackBar,
    private eventListenerService: EventListenerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.updateLoadingStatus(true);
    this.subscriptions.push(
      this.sharedDataService
        .getPostsByDeleteCondition(false)
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
      case MENU_OPTION.MOVE_TO_TRASH:
        this.movePostToTrash(event.id, Utility.getObjById(event.id, this.posts, 'id'));
        break;
      case MENU_OPTION.EDIT:
        this.editPost(event.id);
        break;
    }
  }

  deletePost(id: number) {
    this.subscriptions.push(
      this.sharedDataService.deletePost(id).subscribe((response) => {
        this.showSuccessSnackbar(CONSTANTS.POST_DELETE_SUCCESSFULLY);
        this.posts = this.posts.filter(post => post.id !== id);
        this.updateLoadingStatus(false);
      })
      );
    }

  movePostToTrash(id: number, post: Post) {
    post.isDeleted = true;
    this.subscriptions.push(
      this.sharedDataService.updatePostById(id, post).subscribe((response) => {
        this.showSuccessSnackbar(CONSTANTS.POST_MOVED_TO_TRASH_SUCCESSFULLY);
        this.posts = this.posts.filter(p => p.id !== id);
        this.updateLoadingStatus(false);
      })
    );
  }

  editPost(id: number) {
    this.router.navigateByUrl(`/update/${id}`);
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

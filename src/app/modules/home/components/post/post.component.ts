import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedDataService } from 'src/app/shared/services/shared-data/shared-data.service';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/shared/interfaces/posts';
import {
  MODE,
  MENU_OPTION,
  MODULE,
  ACTION,
} from 'src/app/shared/enum/shared-enum';
import { EmittedMenuSelection } from 'src/app/shared/interfaces/shared';
import { EventListenerService } from 'src/app/shared/services/event-listener/event-listener.service';
import { CONSTANTS } from 'src/app/shared/constants/constant';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomSnackbarComponent } from 'src/app/shared/components/custom-snackbar/custom-snackbar.component';
import { SnackbarConfig } from 'src/app/configs/snackbar-config';
import { Comment } from 'src/app/shared/interfaces/comments';
import { Utility } from 'src/app/shared/utils/utility';

@Component({
  selector: 'sh-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit, OnDestroy {
  post: Post;
  similarPosts: Post[];
  mode = MODE;
  pId: number;
  subscriptions: Subscription[] = [];
  module = MODULE;
  comments: Comment[];
  action = ACTION;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private sharedDataService: SharedDataService,
    private eventListenerService: EventListenerService,
    private snackBar: MatSnackBar
  ) {
    this.subscriptions.push(
      this.activatedRoute.params.subscribe((param) => {
        this.pId = +param.id;
        this.eventListenerService.updateLoadingStatus(true);
        this.getPost();
        this.getSimilarPosts();
        this.getComment();
      })
    );
  }

  ngOnInit(): void {}

  getSimilarPosts() {
    this.subscriptions.push(
      this.sharedDataService
        .getPostByNotPostIdAndDeleteCondition(false, this.pId)
        .subscribe(
          (response: Post[]) => {
            this.similarPosts = response;
            this.eventListenerService.updateLoadingStatus(false);
          },
          (error) => {
            this.redirectToHome();
          }
        )
    );
  }

  private redirectToHome() {
    this.router.navigateByUrl('/');
  }

  getPost() {
    this.subscriptions.push(
      this.sharedDataService.getPostById(this.pId).subscribe(
        (response: Post) => {
          this.post = response;
          this.eventListenerService.updateLoadingStatus(false);
        },
        (error) => {
          this.redirectToHome();
        }
      )
    );
  }

  getComment() {
    this.subscriptions.push(
      this.sharedDataService
        .getCommentsByPostIdAndDeleteCondition(false, this.pId)
        .subscribe(
          (response: Comment[]) => {
            this.comments = response;
            this.post.commentCount = this.comments.length;
            this.updateLoadingStatus(false);
          },
          (error) => {
            this.redirectToHome();
          }
        )
    );
  }

  onMenuClick(event: EmittedMenuSelection, isMain = false) {
    this.updateLoadingStatus(true);
    switch (event.option) {
      case MENU_OPTION.DELETE:
        this.deletePost(event.id, isMain);
        break;
      case MENU_OPTION.MOVE_TO_TRASH:
        this.movePostToTrash(
          event.id,
          this.getPostByModule(event.module, event.id),
          isMain
        );
        break;
      case MENU_OPTION.EDIT:
        this.editPost(event.id);
        break;
    }
  }

  getPostByModule(module: MODULE, id?: number) {
    if (module === MODULE.MAIN_POST) {
      return this.post;
    }

    return Utility.getObjById(id, this.similarPosts, 'id');
  }

  deletePost(id: number, isMainMenu?: boolean) {
    this.subscriptions.push(
      this.sharedDataService.deletePost(id).subscribe((response) => {
        this.showSuccessSnackbar(CONSTANTS.POST_DELETE_SUCCESSFULLY);
        if (isMainMenu) {
          this.router.navigateByUrl('/');
        } else {
          this.getSimilarPosts();
        }
      })
    );
  }

  movePostToTrash(id: number, post: Post, isMainMenu?: boolean) {
    post.isDeleted = true;
    this.subscriptions.push(
      this.sharedDataService.updatePostById(id, post).subscribe((response) => {
        this.showSuccessSnackbar(CONSTANTS.POST_MOVED_TO_TRASH_SUCCESSFULLY);
        if (isMainMenu) {
          this.router.navigateByUrl('/trash');
        } else {
          this.getSimilarPosts();
        }
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

  addComment(comment: Comment) {
    this.updateLoadingStatus(true);
    comment.postId = this.post.id;
    this.subscriptions.push(
      this.sharedDataService.addComment(comment).subscribe((response) => {
        this.getComment();
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

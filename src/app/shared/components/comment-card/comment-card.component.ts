import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { Comment } from '../../interfaces/comments';
import { MODE, MODULE, MENU_OPTION, ACTION } from '../../enum/shared-enum';
import { EmittedMenuSelection } from '../../interfaces/shared';
import { EventListenerService } from '../../services/event-listener/event-listener.service';
import { SharedDataService } from '../../services/shared-data/shared-data.service';
import { Subscription } from 'rxjs';
import { CONSTANTS } from '../../constants/constant';
import { CustomSnackbarComponent } from '../custom-snackbar/custom-snackbar.component';
import { SnackbarConfig } from 'src/app/configs/snackbar-config';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'sh-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.scss'],
})
export class CommentCardComponent implements OnInit, OnDestroy {
  @Input() comment: Comment;
  @Input() mode: MODE;
  @Input() module: MODULE;
  @Output() refreshComment = new EventEmitter<any>();
  action = ACTION.UPDATE;
  commentMode = MODE.VIEW;

  subscriptions: Subscription[] = [];

  constructor(
    private eventListenerService: EventListenerService,
    private sharedDataService: SharedDataService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  onMenuClick(event: EmittedMenuSelection) {
    this.updateLoadingStatus(true);
    switch (event.option) {
      case MENU_OPTION.DELETE:
        this.deleteComment();
        break;
      case MENU_OPTION.MOVE_TO_TRASH:
        this.moveCommentToTrash();
        break;
      case MENU_OPTION.EDIT:
        this.editComment();
        break;
      case MENU_OPTION.RESTORE:
        this.restoreComment();
        break;
    }
  }

  restoreComment() {
    this.comment.isDeleted = false;
    this.subscriptions.push(
      this.sharedDataService
        .updateCommentById(this.comment.id, this.comment)
        .subscribe((response) => {
          this.showSuccessSnackbar(CONSTANTS.COMMENT_RESTORED_SUCCESSFULLY);
          this.refreshComment.emit();
          this.updateLoadingStatus(false);
        })
    );
  }

  deleteComment() {
    this.subscriptions.push(
      this.sharedDataService
        .deleteComment(this.comment.id)
        .subscribe((response) => {
          this.showSuccessSnackbar(CONSTANTS.COMMENT_DELETE_SUCCESSFULLY);
          this.refreshComment.emit();
          this.updateLoadingStatus(false);
        })
    );
  }

  moveCommentToTrash() {
    this.comment.isDeleted = true;
    this.subscriptions.push(
      this.sharedDataService
        .updateCommentById(this.comment.id, this.comment)
        .subscribe((response) => {
          this.showSuccessSnackbar(
            CONSTANTS.COMMENT_MOVED_TO_TRASH_SUCCESSFULLY
          );
          this.refreshComment.emit();
          this.updateLoadingStatus(false);
        })
    );
  }

  updateComment(comment: Comment) {
    this.updateLoadingStatus(true);
    this.commentMode = MODE.VIEW;
    this.subscriptions.push(
      this.sharedDataService
        .updateCommentById(comment.id, comment)
        .subscribe((response) => {
          this.showSuccessSnackbar(CONSTANTS.COMMENT_UPDATED_SUCCESSFULLY);
          this.refreshComment.emit();
          this.updateLoadingStatus(false);
        })
    );
  }

  editComment() {
    this.commentMode = MODE.EDIT;
    this.updateLoadingStatus(false);
  }

  cancelEdit() {
    this.commentMode = MODE.VIEW;
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

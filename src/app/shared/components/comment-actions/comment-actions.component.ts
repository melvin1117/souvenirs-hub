import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from '../../interfaces/comments';
import { MODE, ACTION } from '../../enum/shared-enum';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormGroupDirective,
} from '@angular/forms';
import { Utility } from '../../utils/utility';
import { CONSTANTS } from '../../constants/constant';

@Component({
  selector: 'sh-comment-actions',
  templateUrl: './comment-actions.component.html',
  styleUrls: ['./comment-actions.component.scss'],
})
export class CommentActionsComponent implements OnInit {
  @Input() comment: Comment;
  @Input() mode: MODE;
  @Input() action: ACTION;
  @Output() userResponse = new EventEmitter<Comment>();
  @Output() cancel = new EventEmitter();
  allModes = MODE;
  maxCharAllowed = CONSTANTS.MAX_COMMENT_CHAR_COUNT;

  commentFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.commentFormGroup = this.formBuilder.group({
      comment: ['', [Validators.required, Validators.maxLength(this.maxCharAllowed)]],
    });
  }

  ngOnInit(): void {
    this.setComment();
  }

  private setComment() {
    if (this.comment) {
      this.commentFormGroup.patchValue({
        comment: this.comment.comment,
      });
    }
  }

  clearText(formDirective: FormGroupDirective) {
    this.commentFormGroup.reset();
    formDirective.resetForm();
  }

  onSubmit(formDirective: FormGroupDirective) {
    if (!this.commentFormGroup.invalid) {
      if (this.comment) {
        this.comment.comment = this.commentFormGroup.controls.comment.value;
        this.comment.updatedTime = new Date();
      } else {
        this.comment = {
          comment: this.commentFormGroup.controls.comment.value,
          createdTime: new Date(),
          commenter: Utility.getRandomName(),
          isDeleted: false,
          id: null,
          postId: null,
        };
      }
      this.userResponse.emit(this.comment);
      if (this.action === ACTION.CREATE) {
        this.commentFormGroup.reset();
        formDirective.resetForm();
        this.comment = undefined;
      }
    }
  }

  get commentValue() {
    return this.commentFormGroup.get('comment').value;
  }

  onCancel(event, formDirective: FormGroupDirective) {
    event.preventDefault();
    if (this.action === ACTION.CREATE) {
      this.clearText(formDirective);
    } else {
      this.setComment();
      this.cancel.emit();
    }
  }
}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentActionsComponent } from './comment-actions.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Comment } from '../../interfaces/comments';

describe('CommentActionsComponent', () => {
  let component: CommentActionsComponent;
  let fixture: ComponentFixture<CommentActionsComponent>;
  let COMMENT: Comment;

  beforeEach(async(() => {
    COMMENT = {
      id: 1,
      comment: 'Sample Comment 1',
      commenter: 'John Doe',
      createdTime: new Date('30 May, 2020'),
      isDeleted: false,
      postId: 2,
    };
    TestBed.configureTestingModule({
      declarations: [CommentActionsComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentActionsComponent);
    component = fixture.componentInstance;
    component.comment = COMMENT;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

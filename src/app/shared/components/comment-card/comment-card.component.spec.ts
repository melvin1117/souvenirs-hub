import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentCardComponent } from './comment-card.component';
import { SharedDataService } from '../../services/shared-data/shared-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Overlay } from '@angular/cdk/overlay';
import { Comment } from '../../interfaces/comments';

describe('CommentCardComponent', () => {
  let component: CommentCardComponent;
  let fixture: ComponentFixture<CommentCardComponent>;
  let mockSharedDataService;
  let COMMENT: Comment;
  beforeEach(async(() => {
    mockSharedDataService = jasmine.createSpyObj(['getPostsByDeleteCondition', 'deletePost', 'updatePostById']);
    COMMENT = {
        id: 1,
        comment: 'Sample Comment 1',
        commenter: 'John Doe',
        createdTime: new Date('30 May, 2020'),
        isDeleted: false,
        postId: 2,
      };
    TestBed.configureTestingModule({
      declarations: [CommentCardComponent],
      providers: [
        { provide: SharedDataService, useValue: mockSharedDataService },
        MatSnackBar,
        Overlay,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentCardComponent);
    component = fixture.componentInstance;
    component.comment = COMMENT;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

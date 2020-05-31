import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentTrashComponent } from './comment-trash.component';
import { SharedDataService } from 'src/app/shared/services/shared-data/shared-data.service';
import { of } from 'rxjs';
import { Comment } from 'src/app/shared/interfaces/comments';

describe('CommentTrashComponent', () => {
  let component: CommentTrashComponent;
  let fixture: ComponentFixture<CommentTrashComponent>;
  let mockSharedDataService;
  let COMMENTS: Comment[];

  beforeEach(async(() => {
    mockSharedDataService = jasmine.createSpyObj(['getCommentsByDeleteCondition']);
    COMMENTS = [
      {
        id: 1,
        comment: 'Sample Comment 1',
        commenter: 'John Doe',
        createdTime: new Date('30 May, 2020'),
        isDeleted: false,
        postId: 2,
      },
      {
        id: 2,
        comment: 'Sample Comment 2',
        commenter: 'Miley Cyrus',
        createdTime: new Date('28 May, 2020'),
        isDeleted: false,
        postId: 3,
      },
    ];
    TestBed.configureTestingModule({
      declarations: [CommentTrashComponent],
      providers: [
        { provide: SharedDataService, useValue: mockSharedDataService },
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentTrashComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get list of comments', () => {
    mockSharedDataService.getCommentsByDeleteCondition.and.returnValue(of(COMMENTS));

    fixture.detectChanges();

    expect(component.comments.length).toBe(2);
  });
});

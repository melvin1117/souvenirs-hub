import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { SharedDataService } from 'src/app/shared/services/shared-data/shared-data.service';
import { Post } from 'src/app/shared/interfaces/posts';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Overlay } from '@angular/cdk/overlay';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let mockSharedDataService;
  let POSTS: Post[];

  beforeEach(() => {
    mockSharedDataService = jasmine.createSpyObj(['getPostsByDeleteCondition', 'deletePost', 'updatePostById']);
    POSTS = [
      {
        author: 'John Doe',
        content: 'Sample text',
        createdTime: new Date('May 30, 2020'),
        id: 1,
        image: '',
        isDeleted: false,
        title: ' Sample title',
      },
      {
        author: 'Simon John',
        content: 'Sample text2',
        createdTime: new Date('May 29, 2020'),
        updatedTime: new Date('May 29, 2020'),
        id: 1,
        image: '',
        isDeleted: false,
        title: ' Sample title2',
        commentCount: 5,
      },
    ];
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [RouterTestingModule.withRoutes([])],
      providers: [
        { provide: SharedDataService, useValue: mockSharedDataService },
        MatSnackBar,
        Overlay,
      ]
    });
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get list of posts', () => {
    mockSharedDataService.getPostsByDeleteCondition.and.returnValue(of(POSTS));

    fixture.detectChanges();

    expect(component.posts.length).toBe(2);
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdatePostComponent } from './create-update-post.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedDataService } from 'src/app/shared/services/shared-data/shared-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Overlay } from '@angular/cdk/overlay';
import { ACTION } from 'src/app/shared/enum/shared-enum';
import { of } from 'rxjs';
import { Post } from 'src/app/shared/interfaces/posts';
import { FormsModule } from '@angular/forms';

describe('CreateUpdatePostComponent', () => {
  let component: CreateUpdatePostComponent;
  let fixture: ComponentFixture<CreateUpdatePostComponent>;
  let mockSharedDataService;
  let POST: Post;
  beforeEach(async(() => {
    POST = {
      author: 'John Doe',
      content: 'Sample text',
      createdTime: new Date('May 30, 2020'),
      id: 1,
      image: '',
      isDeleted: false,
      title: ' Sample title',
    };
    mockSharedDataService = jasmine.createSpyObj(['getPostById', 'addPost', 'updatePostById']);
    TestBed.configureTestingModule({
      declarations: [CreateUpdatePostComponent],
      imports: [
        RouterTestingModule.withRoutes([]),
        FormsModule,
      ],
      providers: [
        { provide: SharedDataService, useValue: mockSharedDataService },
        MatSnackBar,
        Overlay,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUpdatePostComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should get post by id', () => {
  //   component.action = ACTION.UPDATE;
  //   component.pId = 1;
  //   mockSharedDataService.getPostById.and.returnValue(of(POST));

  //   fixture.detectChanges();

  //   expect(component.post).toBe(POST);
  // });
});

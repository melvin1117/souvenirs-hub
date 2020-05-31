import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostComponent } from './post.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Overlay } from '@angular/cdk/overlay';
import { SharedDataService } from 'src/app/shared/services/shared-data/shared-data.service';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;
  let mockSharedDataService;

  beforeEach(async(() => {
    mockSharedDataService = jasmine.createSpyObj(['getPostsByDeleteCondition', 'deletePost', 'updatePostById']);
    TestBed.configureTestingModule({
      declarations: [PostComponent],
      imports: [RouterTestingModule.withRoutes([])],
      providers: [
        { provide: SharedDataService, useValue: mockSharedDataService },
        MatSnackBar,
        Overlay,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
  });

});

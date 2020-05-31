import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostInfoComponent } from './post-info.component';
import { MODULE } from '../../enum/shared-enum';

describe('PostInfoComponent', () => {
  let component: PostInfoComponent;
  let fixture: ComponentFixture<PostInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostInfoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostInfoComponent);
    component = fixture.componentInstance;
    component.post = {
      author: 'John Doe',
      content: 'Sample text',
      createdTime: new Date('May 30, 2020'),
      id: 1,
      image: '',
      isDeleted: false,
      title: ' Sample title',
    };

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add post values to DOM element for POST module (minimal input)', () => {
    component.module = MODULE.POST;

    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.user-name').textContent).toContain('John Doe');
    expect(fixture.nativeElement.querySelector('.created-time').textContent).toContain('May 30, 2020');
  });

  it('should add post values to DOM element for MAIN POST module (minimal input)', () => {
    component.module = MODULE.MAIN_POST;

    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.user-name').textContent).toContain('John Doe');
    expect(fixture.nativeElement.querySelector('.created-time').textContent).toContain('May 30, 2020');
  });

  it('should add post values to DOM element for MAIN POST module (UPDATE)', () => {
    component.module = MODULE.MAIN_POST;
    component.post.updatedTime = new Date('May 31, 2020');

    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.user-name').textContent).toContain('John Doe');
    expect(fixture.nativeElement.querySelector('.created-time').textContent).toContain('May 30, 2020');
    expect(fixture.nativeElement.querySelector('.right-info span').textContent).toContain('May 31, 2020');
  });

  it('should add post values to DOM element for POST module (UPDATE)', () => {
    component.module = MODULE.POST;
    component.post.updatedTime = new Date('May 31, 2020');

    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.user-name').textContent).toContain('John Doe');
    expect(fixture.nativeElement.querySelector('.created-time').textContent).toContain('May 30, 2020');
  });

  it('should add post values to DOM element for MAIN POST module (COMMENT COUNT)', () => {
    component.module = MODULE.MAIN_POST;
    component.post.commentCount = 5;

    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.user-name').textContent).toContain('John Doe');
    expect(fixture.nativeElement.querySelector('.created-time').textContent).toContain('May 30, 2020');
    expect(fixture.nativeElement.querySelector('.right-info span').textContent).toContain(5);
  });

  it('should add post values to DOM element for POST module (COMMENT COUNT)', () => {
    component.module = MODULE.POST;
    component.post.commentCount = 5;

    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.user-name').textContent).toContain('John Doe');
    expect(fixture.nativeElement.querySelector('.created-time').textContent).toContain('May 30, 2020');
    expect(fixture.nativeElement.querySelector('.right-info span').textContent).toContain(5);
  });

  it('should add post values to DOM element for MAIN POST module (COMMENT COUNT & UPDATE)', () => {
    component.module = MODULE.MAIN_POST;
    component.post.commentCount = 5;
    component.post.updatedTime = new Date('May 31, 2020');

    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.user-name').textContent).toContain('John Doe');
    expect(fixture.nativeElement.querySelector('.created-time').textContent).toContain('May 30, 2020');
    expect(fixture.nativeElement.querySelector('.right-info span').textContent).toContain('May 31, 2020');
    expect(fixture.nativeElement.querySelector('.right-info span:nth-child(2)').textContent).toContain(5);
  });

  it('should add post values to DOM element for POST module (COMMENT COUNT & UPDATE)', () => {
    component.module = MODULE.POST;
    component.post.commentCount = 5;
    component.post.updatedTime = new Date('May 31, 2020');

    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.user-name').textContent).toContain('John Doe');
    expect(fixture.nativeElement.querySelector('.created-time').textContent).toContain('May 30, 2020');
    expect(fixture.nativeElement.querySelector('.right-info span').textContent).toContain(5);
  });

});

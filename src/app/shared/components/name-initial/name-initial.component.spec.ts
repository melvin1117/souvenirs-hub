import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameInitialComponent } from './name-initial.component';
import { By } from '@angular/platform-browser';

describe('NameInitialComponent', () => {
  let component: NameInitialComponent;
  let fixture: ComponentFixture<NameInitialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NameInitialComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameInitialComponent);
    component = fixture.componentInstance;
    component.name = 'John Doe Senior';
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create initials of provided name using default character count  and check the DOM', () => {

    fixture.detectChanges();

    expect(component.initial).toBe('JD');
    expect(fixture.debugElement.query(By.css('.name-initial-wrapper')).nativeElement.textContent).toContain('JD');
  });

  it('should create initials of provided name using provided character count (3) and check the DOM', () => {
    component.charCount = 3;

    fixture.detectChanges();

    expect(component.initial).toBe('JDS');
    expect(fixture.debugElement.query(By.css('.name-initial-wrapper')).nativeElement.textContent).toContain('JDS');
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerNavbarViewComponent } from './jobseeker-navbar-view.component';

describe('JobseekerNavbarViewComponent', () => {
  let component: JobseekerNavbarViewComponent;
  let fixture: ComponentFixture<JobseekerNavbarViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobseekerNavbarViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobseekerNavbarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

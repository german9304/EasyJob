import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerNavbarComponent } from './jobseeker-navbar.component';

describe('JobseekerNavbarComponent', () => {
  let component: JobseekerNavbarComponent;
  let fixture: ComponentFixture<JobseekerNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobseekerNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobseekerNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

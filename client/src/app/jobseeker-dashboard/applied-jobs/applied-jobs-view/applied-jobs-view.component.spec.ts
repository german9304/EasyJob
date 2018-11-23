import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedJobsViewComponent } from './applied-jobs-view.component';

describe('AppliedJobsViewComponent', () => {
  let component: AppliedJobsViewComponent;
  let fixture: ComponentFixture<AppliedJobsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppliedJobsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliedJobsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

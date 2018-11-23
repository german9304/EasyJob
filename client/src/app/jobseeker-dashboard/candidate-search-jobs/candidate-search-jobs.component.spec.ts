import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateSearchJobsComponent } from './candidate-search-jobs.component';

describe('CandidateSearchJobsComponent', () => {
  let component: CandidateSearchJobsComponent;
  let fixture: ComponentFixture<CandidateSearchJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateSearchJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateSearchJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

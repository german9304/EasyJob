import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateSuggestedJobsComponent } from './candidate-suggested-jobs.component';

describe('DashboardComponent', () => {
  let component: CandidateSuggestedJobsComponent;
  let fixture: ComponentFixture<CandidateSuggestedJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CandidateSuggestedJobsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateSuggestedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

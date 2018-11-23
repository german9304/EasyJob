import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateFilesComponent } from './candidate-files.component';

describe('CandidateFilesComponent', () => {
  let component: CandidateFilesComponent;
  let fixture: ComponentFixture<CandidateFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {CandExpEduResComponent } from './cand-fields-jobs';

describe('CandidateProfileComponent', () => {
  let component: CandExpEduResComponent ;
  let fixture: ComponentFixture<CandExpEduResComponent >;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CandExpEduResComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandExpEduResComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

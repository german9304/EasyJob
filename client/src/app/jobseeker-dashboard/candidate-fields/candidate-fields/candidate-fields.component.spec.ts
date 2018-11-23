import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateFieldsComponent } from './candidate-fields.component';

describe('CandidateFieldsComponent', () => {
  let component: CandidateFieldsComponent;
  let fixture: ComponentFixture<CandidateFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

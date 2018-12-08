import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRow2Component } from './form-row2.component';

describe('FormRow2Component', () => {
  let component: FormRow2Component;
  let fixture: ComponentFixture<FormRow2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRow2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRow2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

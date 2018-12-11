import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRow1Component } from './form-row1.component';

describe('FormRow1Component', () => {
  let component: FormRow1Component;
  let fixture: ComponentFixture<FormRow1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRow1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRow1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

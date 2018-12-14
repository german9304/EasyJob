import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRow3Component } from './form-row3.component';

describe('FormRow3Component', () => {
  let component: FormRow3Component;
  let fixture: ComponentFixture<FormRow3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRow3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRow3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

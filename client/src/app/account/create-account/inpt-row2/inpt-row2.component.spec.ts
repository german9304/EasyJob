import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InptRow2Component } from './inpt-row2.component';

describe('InptRow2Component', () => {
  let component: InptRow2Component;
  let fixture: ComponentFixture<InptRow2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InptRow2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InptRow2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

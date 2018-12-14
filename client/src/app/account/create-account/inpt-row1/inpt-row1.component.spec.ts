import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InptRow1Component } from './inpt-row1.component';

describe('InptRow1Component', () => {
  let component: InptRow1Component;
  let fixture: ComponentFixture<InptRow1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InptRow1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InptRow1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

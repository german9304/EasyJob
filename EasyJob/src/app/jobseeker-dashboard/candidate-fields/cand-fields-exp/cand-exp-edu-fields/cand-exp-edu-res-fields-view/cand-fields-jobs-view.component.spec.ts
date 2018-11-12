import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandExpEduResViewComponent  } from './cand-fields-jobs-view.component';

describe('CandExpEduResViewComponent ', () => {
  let component:  CandExpEduResViewComponent;
  let fixture: ComponentFixture< CandExpEduResViewComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandExpEduResViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandExpEduResViewComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

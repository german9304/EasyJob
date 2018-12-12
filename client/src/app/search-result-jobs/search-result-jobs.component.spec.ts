import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultJobsComponent } from './search-result-jobs.component';

describe('SearchResultJobsComponent', () => {
  let component: SearchResultJobsComponent;
  let fixture: ComponentFixture<SearchResultJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

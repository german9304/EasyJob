import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSerchListComponent } from './job-serch-list.component';

describe('JobSerchListComponent', () => {
  let component: JobSerchListComponent;
  let fixture: ComponentFixture<JobSerchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobSerchListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobSerchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

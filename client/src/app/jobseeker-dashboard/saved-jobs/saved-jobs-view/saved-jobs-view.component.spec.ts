import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedJobsViewComponent } from './saved-jobs-view.component';

describe('SavedJobsViewComponent', () => {
  let component: SavedJobsViewComponent;
  let fixture: ComponentFixture<SavedJobsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedJobsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedJobsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

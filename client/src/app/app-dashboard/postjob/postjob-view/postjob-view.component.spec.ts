import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostjobViewComponent } from './postjob-view.component';

describe('PostjobViewComponent', () => {
  let component: PostjobViewComponent;
  let fixture: ComponentFixture<PostjobViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostjobViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostjobViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

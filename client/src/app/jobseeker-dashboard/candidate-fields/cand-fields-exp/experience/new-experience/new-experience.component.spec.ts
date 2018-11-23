import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewExperienceComponent } from './new-experience.component';

describe(' NewExperienceComponent ', () => {
  let component:  NewExperienceComponent ;
  let fixture: ComponentFixture< NewExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  NewExperienceComponent  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( NewExperienceComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
